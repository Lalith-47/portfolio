import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Lalith</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card"
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-8xl sm:text-9xl font-bold text-gradient mb-4">
                404
              </h1>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🤖
              </motion.div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Oops! Page Not Found
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                The page you're looking for seems to have wandered off into the
                digital void. Don't worry, even the best developers encounter
                404s!
              </p>
            </motion.div>

            {/* Terminal-style error */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="terminal mb-8 text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">cd /requested-page</span>
                </div>
                <div className="text-red-400 ml-4">
                  bash: cd: /requested-page: No such file or directory
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">ls -la</span>
                </div>
                <div className="text-cyan-300 ml-4">
                  total 0<br />
                  drwxr-xr-x 2 lalith lalith 4096{" "}
                  {new Date().toLocaleDateString()} .<br />
                  drwxr-xr-x 3 lalith lalith 4096{" "}
                  {new Date().toLocaleDateString()} ..
                  <br />
                  -rw-r--r-- 1 lalith lalith 0 {new Date().toLocaleDateString()}{" "}
                  nothing_here.txt
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button glow-border px-8 py-4 text-lg font-semibold rounded-xl flex items-center gap-3"
                >
                  <FiHome />
                  Go Home
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="glass-button px-8 py-4 text-lg font-semibold rounded-xl flex items-center gap-3"
              >
                <FiArrowLeft />
                Go Back
              </motion.button>
            </motion.div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <p className="text-white/50 text-sm italic">
                Fun fact: The 404 error was named after room 404 at CERN, where
                the original web servers were located.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
