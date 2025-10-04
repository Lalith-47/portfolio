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
    <footer className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7"
        >
          {/* Main footer content */}
          <div className="glass-card max-w-2xl mx-auto">
            <h3
              className="font-bold text-gradient mb-3 sm:mb-3.5 md:mb-4"
              style={{
                fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                lineHeight: "clamp(1.5rem, 3.5vw, 2rem)",
              }}
            >
              Thanks for Visiting!
            </h3>
            <p
              className="text-white/70 leading-relaxed mb-4 sm:mb-5 md:mb-6 px-2"
              style={{
                fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                lineHeight: "clamp(1.375rem, 3.5vw, 1.625rem)",
              }}
            >
              This portfolio showcases my journey as a Computer Science student
              passionate about open-source, Linux, and cloud technologies. Let's
              build something amazing together!
            </p>

            {/* Social Links in Footer */}
            <div className="flex justify-center space-x-3 sm:space-x-3.5 md:space-x-4 mb-3 sm:mb-4">
              {socialLinks.map(({ icon: Icon, href, label, name }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="glass p-2.5 sm:p-3 md:p-3.5 rounded-full hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent min-w-[48px] min-h-[48px] flex items-center justify-center"
                  aria-label={label}
                >
                  <Icon
                    aria-hidden="true"
                    style={{
                      fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Azure hosting note */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 text-white/60 hover:text-blue-400 transition-colors duration-300 px-4"
            style={{
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
            }}
          >
            <span>Hosted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiHeart
                className="text-red-400"
                style={{
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                }}
              />
            </motion.div>
            <span>on</span>
            <SiMicrosoftazure
              className="text-blue-400"
              style={{
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
              }}
            />
            <span className="font-semibold">Microsoft Azure</span>
          </motion.div>

          {/* Copyright and links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-5 pt-5 sm:pt-6 md:pt-8 border-t border-white/10">
            <p
              className="text-white/60 text-center"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              }}
            >
              © {currentYear} Lalith. All rights reserved.
            </p>

            <div
              className="flex items-center gap-4 sm:gap-5 md:gap-6 text-white/60"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              }}
            >
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300 min-h-[48px] flex items-center px-1"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Back to Top
              </motion.a>
              <span className="hidden xs:inline">•</span>
              <motion.a
                href="https://github.com/Lalith-47/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="hover:text-white transition-colors duration-300 min-h-[48px] flex items-center px-1"
              >
                View Source
              </motion.a>
            </div>
          </div>

          {/* Fun quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-3 sm:pt-4 md:pt-5 px-4"
          >
            <p
              className="text-white/40 italic leading-relaxed"
              style={{
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                lineHeight: "clamp(1.125rem, 3vw, 1.375rem)",
              }}
            >
              "Learn deeply, build simply, and let the code speak."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
