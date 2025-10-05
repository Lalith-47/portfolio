/**
 * Toast Notification Component
 *
 * A lightweight, accessible toast notification component for displaying
 * success, error, and info messages to users.
 *
 * @author Lalith
 * @version 1.0.0
 */

import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

/**
 * Toast Component
 *
 * Displays a temporary notification message with automatic dismissal
 */
export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <FiCheckCircle className="text-green-400 text-xl flex-shrink-0" />
        );
      case "error":
        return <FiAlertCircle className="text-red-400 text-xl flex-shrink-0" />;
      case "info":
        return <FiInfo className="text-blue-400 text-xl flex-shrink-0" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500/10 border-green-500/30 text-green-400";
      case "error":
        return "bg-red-500/10 border-red-500/30 text-red-400";
      case "info":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-16 sm:top-20 right-2 sm:right-4 z-[9999] max-w-sm sm:max-w-md w-full px-2 sm:px-4"
          role="alert"
          aria-live="polite"
        >
          <div
            className={`glass border rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-lg ${getStyles()}`}
          >
            {getIcon()}
            <p className="flex-1 text-white text-xs sm:text-sm md:text-base font-medium leading-tight">
              {message}
            </p>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-1 sm:p-1.5 focus:outline-none focus:ring-2 focus:ring-white/50 rounded min-w-[32px] min-h-[32px] flex items-center justify-center"
              aria-label="Close notification"
            >
              <FiX className="text-base sm:text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
