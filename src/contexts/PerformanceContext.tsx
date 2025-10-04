/**
 * Performance Context
 *
 * Provides device and performance information to all components
 * for dynamic optimization based on hardware capabilities.
 *
 * @author AI Assistant
 * @version 1.0.0
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  DeviceInfo,
  getDeviceInfo,
  getAnimationSettings,
  PerformanceMonitor,
  debounce,
} from "@/utils/deviceDetection";

interface AnimationSettings {
  enableAnimations: boolean;
  enableParticles: boolean;
  particleCount: number;
  animationDuration: number;
  enableBlur: boolean;
}

interface PerformanceContextType {
  deviceInfo: DeviceInfo;
  animationSettings: AnimationSettings;
  currentFPS: number;
  isPerformanceGood: boolean;
  refreshDeviceInfo: () => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(
  undefined
);

interface PerformanceProviderProps {
  children: ReactNode;
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() =>
    getDeviceInfo()
  );
  const [animationSettings, setAnimationSettings] = useState<AnimationSettings>(
    () => getAnimationSettings()
  );
  const [currentFPS, setCurrentFPS] = useState(60);
  const [isPerformanceGood, setIsPerformanceGood] = useState(true);

  // Refresh device info
  const refreshDeviceInfo = () => {
    const newDeviceInfo = getDeviceInfo();
    setDeviceInfo(newDeviceInfo);
    setAnimationSettings(getAnimationSettings());
  };

  useEffect(() => {
    // Initial device info
    refreshDeviceInfo();

    // Monitor performance
    const monitor = new PerformanceMonitor();
    monitor.start((fps) => {
      setCurrentFPS(fps);

      // If FPS drops below 30, consider performance poor
      const performanceGood = fps >= 30;
      setIsPerformanceGood(performanceGood);

      // If performance is consistently poor, reduce animation settings
      if (!performanceGood && animationSettings.enableParticles) {
        setAnimationSettings((prev) => ({
          ...prev,
          enableParticles: false,
          particleCount: 0,
          animationDuration: Math.max(200, prev.animationDuration - 100),
        }));
      }
    });

    // Update on resize with debounce
    const handleResize = debounce(() => {
      refreshDeviceInfo();
    }, 250);

    window.addEventListener("resize", handleResize);

    // Update on orientation change
    const handleOrientationChange = () => {
      // Small delay to ensure dimensions are updated
      setTimeout(refreshDeviceInfo, 100);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    // Cleanup
    return () => {
      monitor.stop();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: PerformanceContextType = {
    deviceInfo,
    animationSettings,
    currentFPS,
    isPerformanceGood,
    refreshDeviceInfo,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
}

/**
 * Hook to access performance context
 */
export function usePerformance(): PerformanceContextType {
  const context = useContext(PerformanceContext);

  if (context === undefined) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }

  return context;
}

/**
 * Hook to get device-specific CSS class
 */
export function useDeviceClass(): string {
  const { deviceInfo } = usePerformance();
  return `device-${deviceInfo.type} ${
    deviceInfo.isTouchDevice ? "touch-device" : "no-touch"
  } ${deviceInfo.isLowEndDevice ? "low-end-device" : "high-end-device"}`;
}

/**
 * Hook to conditionally render based on device type
 */
export function useDeviceType() {
  const { deviceInfo } = usePerformance();

  return {
    isMobile: deviceInfo.type === "mobile",
    isTablet: deviceInfo.type === "tablet",
    isDesktop: deviceInfo.type === "desktop",
    isTouchDevice: deviceInfo.isTouchDevice,
    isLowEndDevice: deviceInfo.isLowEndDevice,
  };
}

/**
 * Hook to get optimal image quality based on device
 */
export function useImageQuality(): { quality: number; format: "webp" | "jpg" } {
  const { deviceInfo } = usePerformance();

  if (deviceInfo.isLowEndDevice) {
    return { quality: 60, format: "jpg" };
  }

  if (deviceInfo.type === "mobile") {
    return { quality: 75, format: "webp" };
  }

  return { quality: 90, format: "webp" };
}
