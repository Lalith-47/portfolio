/**
 * Performance Monitor Component
 *
 * Displays performance metrics in development mode
 * and automatically optimizes settings based on FPS.
 *
 * @author AI Assistant
 * @version 1.0.0
 */

import { useEffect, useState } from "react";
import { usePerformance } from "@/contexts/PerformanceContext";

const PerformanceMonitor = () => {
  const { deviceInfo, currentFPS, isPerformanceGood, animationSettings } =
    usePerformance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === "development") {
      // Toggle visibility with Ctrl+Shift+P
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === "P") {
          setIsVisible((prev) => !prev);
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, []);

  if (process.env.NODE_ENV !== "development" || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] glass-card p-3 text-xs font-mono space-y-1 max-w-xs"
      style={{
        fontSize: "11px",
        lineHeight: "1.4",
      }}
    >
      <div className="font-bold text-white mb-2 border-b border-white/20 pb-1">
        Performance Monitor
      </div>

      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-white/60">Device:</span>
          <span className="text-white font-medium">{deviceInfo.type}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Performance:</span>
          <span
            className={`font-medium ${
              deviceInfo.performanceLevel === "high"
                ? "text-green-400"
                : deviceInfo.performanceLevel === "medium"
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {deviceInfo.performanceLevel}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">FPS:</span>
          <span
            className={`font-medium ${
              currentFPS >= 55
                ? "text-green-400"
                : currentFPS >= 30
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            {currentFPS}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Status:</span>
          <span
            className={`font-medium ${
              isPerformanceGood ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPerformanceGood ? "Good" : "Poor"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Screen:</span>
          <span className="text-white font-medium">
            {deviceInfo.screenWidth}×{deviceInfo.screenHeight}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">CPU Cores:</span>
          <span className="text-white font-medium">
            {deviceInfo.hardwareConcurrency}
          </span>
        </div>

        {deviceInfo.deviceMemory && (
          <div className="flex justify-between">
            <span className="text-white/60">Memory:</span>
            <span className="text-white font-medium">
              {deviceInfo.deviceMemory}GB
            </span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-white/60">Touch:</span>
          <span className="text-white font-medium">
            {deviceInfo.isTouchDevice ? "Yes" : "No"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Particles:</span>
          <span className="text-white font-medium">
            {animationSettings.enableParticles
              ? animationSettings.particleCount
              : "Off"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Blur:</span>
          <span className="text-white font-medium">
            {animationSettings.enableBlur ? "On" : "Off"}
          </span>
        </div>
      </div>

      <div className="text-white/40 mt-2 pt-2 border-t border-white/10 text-[10px]">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
