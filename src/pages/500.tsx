/**
 * Custom 500 Error Page
 * 
 * Displayed when a server-side error occurs.
 * Provides user-friendly error message and recovery options.
 * 
 * @author Lalith
 * @version 1.0.0
 */

import { motion } from "framer-motion";
import { FiAlertTriangle, FiHome, FiRefreshCw } from "react-icons/fi";
import Link from "next/link";
import Head from "next/head";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | Lalith</title>
        <meta
          name="description"
          content="An internal server error occurred. We're working to fix it."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex items-center justify-center container-responsive section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="w-full max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card"
          >
            {/* Error Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-500/20 border-2 border-red-500/30 mb-4">
                <FiAlertTriangle className="text-4xl sm:text-5xl text-red-400" />
              </div>
              <h1 className="text-6xl sm:text-8xl font-bold text-gradient mb-2">
                500
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Internal Server Error
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto px-4">
                Something went wrong on our end. We're working to fix it. Please
                try again in a few moments, or return to the home page.
              </p>
            </motion.div>

            {/* Terminal-style error */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="terminal mb-6 sm:mb-8 text-left"
            >
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">curl https://portfolio.dev/api</span>
                </div>
                <div className="text-red-400 ml-4">
                  Error: 500 Internal Server Error
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">systemctl status portfolio</span>
                </div>
                <div className="text-cyan-300 ml-4">
                  ● portfolio.service - Portfolio Web Application
                  <br />
                  &nbsp;&nbsp;&nbsp;Loaded: loaded
                  <br />
                  &nbsp;&nbsp;&nbsp;Active: <span className="text-yellow-400">restarting</span> (auto-restart)
                </div>
              </div>
            </motion.div>

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
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 glass-button glow-border px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Refresh page"
              >
                <FiRefreshCw size={18} />
                Refresh
              </motion.button>

              <Link href="/" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 glass-button px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Go to home page"
                >
                  <FiHome size={18} aria-hidden="true" />
                  Go Home
                </motion.a>
              </Link>
            </motion.div>

            {/* Status Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-6 sm:mt-8 pt-6 border-t border-white/10"
            >
              <p className="text-white/50 text-xs sm:text-sm">
                Error Code: 500 • Server Error
                <br />
                If the problem persists, please contact support
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

