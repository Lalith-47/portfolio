/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the component tree and displays
 * a fallback UI instead of crashing the entire application.
 * 
 * Features:
 * - Graceful error handling
 * - User-friendly error messages
 * - Error logging capability
 * - Recovery options
 * 
 * @author Lalith
 * @version 1.0.0
 */

import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary Component
 * 
 * Wraps components to catch and handle errors gracefully.
 * Provides fallback UI and recovery options.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  /**
   * Static method called when an error is thrown
   * Updates state to trigger fallback UI render
   */
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  /**
   * Lifecycle method called after an error has been thrown
   * Logs error details for debugging
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by boundary:", error, errorInfo);
    }

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // TODO: Send error to logging service in production
    // Example: logErrorToService(error, errorInfo);
  }

  /**
   * Reset error boundary state
   * Allows user to attempt recovery
   */
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  /**
   * Navigate to home page
   * Provides escape route from error state
   */
  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center container-responsive section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="w-full max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card text-center"
            >
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 sm:mb-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-500/20 border border-red-500/30">
                  <FiAlertTriangle className="text-3xl sm:text-4xl text-red-400" />
                </div>
              </motion.div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient">
                  Oops! Something Went Wrong
                </h2>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                  We encountered an unexpected error. Don't worry, your data is
                  safe. Please try refreshing the page or return home.
                </p>
              </motion.div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === "development" && error && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="terminal text-left mb-6 sm:mb-8 max-h-48 overflow-auto"
                >
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="text-red-400 font-bold">
                      Error: {error.message}
                    </div>
                    {errorInfo && (
                      <pre className="text-white/70 whitespace-pre-wrap break-words">
                        {errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleReset}
                  className="flex items-center justify-center gap-2 glass-button glow-border px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Try again"
                >
                  <FiRefreshCw size={18} />
                  Try Again
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 glass-button px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Go to home page"
                >
                  <FiHome size={18} />
                  Go Home
                </motion.button>
              </motion.div>

              {/* Help Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-6 sm:mt-8 pt-6 border-t border-white/10"
              >
                <p className="text-white/50 text-xs sm:text-sm">
                  If the problem persists, please contact support or try again
                  later.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

