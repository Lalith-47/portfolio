/**
 * Footer Component
 * 
 * Website footer featuring:
 * - Social media links with hover animations
 * - Microsoft Azure hosting attribution
 * - Copyright information and navigation links
 * - Inspirational quote and branding
 * - Responsive design with glassmorphism effects
 * 
 * @author Lalith
 * @version 1.0.0
 */

import { motion } from "framer-motion";
import { FiHeart, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiMicrosoftazure } from "react-icons/si";

/**
 * Social media links configuration for footer
 * Centralized configuration for easy maintenance
 */
const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/Lalith-47/",
    label: "Lalith's GitHub Profile",
    name: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/lalithkumarm143/",
    label: "Lalith's LinkedIn Profile",
    name: "LinkedIn",
  },
];

/**
 * Footer Component
 * 
 * Renders the website footer with social links, branding, and navigation.
 * Features animated elements and responsive design.
 */
export default function Footer() {
  // Get current year dynamically for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-6"
        >
          {/* Main footer content */}
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">
              Thanks for Visiting!
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6 px-2">
              This portfolio showcases my journey as a Computer Science student
              passionate about open-source, Linux, and cloud technologies. Let's
              build something amazing together!
            </p>

            {/* Social Links in Footer */}
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map(({ icon: Icon, href, label, name }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-2 rounded-full hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label={label}
                >
                  <Icon size={18} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Azure hosting note */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-white/60 hover:text-blue-400 transition-colors duration-300"
          >
            <span>Hosted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiHeart className="text-red-400 text-sm sm:text-base" />
            </motion.div>
            <span>on</span>
            <SiMicrosoftazure className="text-blue-400 text-sm sm:text-base" />
            <span className="font-semibold">Microsoft Azure</span>
          </motion.div>

          {/* Copyright and links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-xs sm:text-sm text-white/60 text-center">
              © {currentYear} Lalith. All rights reserved.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Back to Top
              </motion.a>
              <span>•</span>
              <motion.a
                href="https://github.com/Lalith-47/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300"
              >
                View Source
              </motion.a>
            </div>
          </div>

          {/* Fun quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-3 sm:pt-4 px-4"
          >
            <p className="text-white/40 italic text-xs sm:text-sm leading-relaxed">
              "Learn deeply, build simply, and let the code speak."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
