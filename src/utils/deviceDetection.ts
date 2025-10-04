/**
 * Device Detection and Performance Monitoring Utility
 *
 * Detects device type, hardware capabilities, and network conditions
 * to optimize UI and performance dynamically.
 *
 * @author AI Assistant
 * @version 1.0.0
 */

export type DeviceType = "mobile" | "tablet" | "desktop";
export type PerformanceLevel = "high" | "medium" | "low";

export interface DeviceInfo {
  type: DeviceType;
  isTouchDevice: boolean;
  isLowEndDevice: boolean;
  performanceLevel: PerformanceLevel;
  screenWidth: number;
  screenHeight: number;
  devicePixelRatio: number;
  hardwareConcurrency: number;
  deviceMemory?: number;
  connectionType?: string;
  effectiveType?: string;
}

/**
 * Detect device type based on screen width and user agent
 */
export const detectDeviceType = (): DeviceType => {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  // Mobile detection
  if (
    width < 768 ||
    /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
  ) {
    return "mobile";
  }

  // Tablet detection
  if (width < 1024 || /ipad|tablet|kindle|playbook|silk/i.test(userAgent)) {
    return "tablet";
  }

  return "desktop";
};

/**
 * Check if device is touch-enabled
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
};

/**
 * Calculate performance level based on hardware capabilities
 */
export const getPerformanceLevel = (): PerformanceLevel => {
  if (typeof window === "undefined") return "high";

  const cores = navigator.hardwareConcurrency || 2;
  // @ts-ignore - deviceMemory is experimental
  const memory = (navigator as any).deviceMemory || 4;
  const pixelRatio = window.devicePixelRatio || 1;

  // Low-end device criteria
  if (cores <= 2 || memory <= 2 || pixelRatio > 2) {
    return "low";
  }

  // Medium-end device criteria
  if (cores <= 4 || memory <= 4) {
    return "medium";
  }

  return "high";
};

/**
 * Check if device is considered low-end
 */
export const isLowEndDevice = (): boolean => {
  return getPerformanceLevel() === "low";
};

/**
 * Get network information
 */
export const getNetworkInfo = () => {
  if (typeof window === "undefined" || !("connection" in navigator)) {
    return { type: "unknown", effectiveType: "4g" };
  }

  // @ts-ignore - connection is experimental
  const connection =
    (navigator as any).connection ||
    (navigator as any).mozConnection ||
    (navigator as any).webkitConnection;

  return {
    type: connection?.type || "unknown",
    effectiveType: connection?.effectiveType || "4g",
    downlink: connection?.downlink,
    rtt: connection?.rtt,
    saveData: connection?.saveData || false,
  };
};

/**
 * Get complete device information
 */
export const getDeviceInfo = (): DeviceInfo => {
  if (typeof window === "undefined") {
    return {
      type: "desktop",
      isTouchDevice: false,
      isLowEndDevice: false,
      performanceLevel: "high",
      screenWidth: 1920,
      screenHeight: 1080,
      devicePixelRatio: 1,
      hardwareConcurrency: 4,
    };
  }

  const networkInfo = getNetworkInfo();
  const performanceLevel = getPerformanceLevel();

  return {
    type: detectDeviceType(),
    isTouchDevice: isTouchDevice(),
    isLowEndDevice: isLowEndDevice(),
    performanceLevel,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
    hardwareConcurrency: navigator.hardwareConcurrency || 2,
    // @ts-ignore
    deviceMemory: (navigator as any).deviceMemory,
    connectionType: networkInfo.type,
    effectiveType: networkInfo.effectiveType,
  };
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Get optimal animation settings based on device performance
 */
export const getAnimationSettings = () => {
  const performanceLevel = getPerformanceLevel();
  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    return {
      enableAnimations: false,
      enableParticles: false,
      particleCount: 0,
      animationDuration: 0,
      enableBlur: false,
    };
  }

  switch (performanceLevel) {
    case "low":
      return {
        enableAnimations: true,
        enableParticles: false,
        particleCount: 0,
        animationDuration: 200, // Faster, simpler animations
        enableBlur: false,
      };
    case "medium":
      return {
        enableAnimations: true,
        enableParticles: true,
        particleCount: 30, // Reduced particles
        animationDuration: 300,
        enableBlur: false,
      };
    case "high":
    default:
      return {
        enableAnimations: true,
        enableParticles: true,
        particleCount: 50,
        animationDuration: 500,
        enableBlur: true,
      };
  }
};

/**
 * Monitor frame rate to detect performance issues
 */
export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private callback?: (fps: number) => void;
  private rafId?: number;

  start(callback: (fps: number) => void) {
    this.callback = callback;
    this.measure();
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private measure = () => {
    this.frameCount++;
    const currentTime = performance.now();
    const elapsed = currentTime - this.lastTime;

    if (elapsed >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / elapsed);
      this.frameCount = 0;
      this.lastTime = currentTime;

      if (this.callback) {
        this.callback(this.fps);
      }
    }

    this.rafId = requestAnimationFrame(this.measure);
  };

  getCurrentFPS(): number {
    return this.fps;
  }
}

/**
 * Debounce function for resize events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
