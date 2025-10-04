/**
 * Hero Section Component
 * 
 * Main landing section featuring Lalith's introduction, social links,
 * and call-to-action buttons. Includes glassmorphism design with
 * smooth Framer Motion animations.
 * 
 * Features:
 * - Animated greeting with waving hand emoji
 * - Professional introduction text
 * - Call-to-action buttons (Contact & Resume)
 * - Social media links with hover effects
 * - Connect with Me section featuring GitHub and LinkedIn
 * - Smooth scroll indicator
 * 
 * @author Lalith
 * @version 1.0.0
 */

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

/**
 * Social media and contact links configuration
 * Update these URLs when social profiles change
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
  {
    icon: FiMail,
    href: "mailto:lalith@example.com",
    label: "Send Email to Lalith",
    name: "Email",
  },
] as const;

/**
 * Hero Component
 * 
 * Renders the main hero section with responsive design and accessibility features.
 * Includes smooth animations and interactive elements for enhanced user experience.
 */
export default function Hero() {
  /**
   * Smooth scroll to contact section
   * Uses native scrollIntoView API for smooth scrolling behavior
   */
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
          >
            Hi, I'm <span className="text-gradient">Lalith</span>{" "}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block"
              aria-label="Waving hand emoji"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto"
          >
            A CSE student exploring{" "}
            <span className="text-gradient font-semibold">open-source</span>,{" "}
            <span className="text-gradient font-semibold">Linux</span>, and{" "}
            <span className="text-gradient font-semibold">the cloud</span>.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building elegant solutions, mastering Linux
            systems, and deploying applications on Microsoft Azure. Always
            learning, always coding.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            role="group"
            aria-label="Call to action buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="glass-button glow-border px-8 py-4 text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Navigate to contact section"
            >
              Get In Touch
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button px-8 py-4 text-lg font-semibold rounded-xl flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Download resume (opens in new tab)"
            >
              <FiDownload aria-hidden="true" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map(({ icon: Icon, href, label, name }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-3 rounded-full hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={label}
                role="listitem"
              >
                <Icon size={24} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>

          {/* Connect with Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-md mx-auto"
          >
            <div className="glass-card text-center">
              <h3 className="text-lg font-semibold text-gradient mb-4">
                Connect with Me
              </h3>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="https://github.com/Lalith-47/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 glass-button px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Visit Lalith's GitHub profile"
                >
                  <FiGithub size={18} aria-hidden="true" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/lalithkumarm143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 glass-button px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Visit Lalith's LinkedIn profile"
                >
                  <FiLinkedin size={18} aria-hidden="true" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            aria-label="Scroll down indicator"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              aria-hidden="true"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
