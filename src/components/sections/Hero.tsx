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
    href: "mailto:Lalith22p3347@gmail.com",
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

  /**
   * Handle resume download with fallback
   * Opens resume in new tab or scrolls to contact if not available
   */
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if resume exists by attempting to fetch it
    fetch("/resume.pdf", { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          // Resume not found, prevent default and show message
          e.preventDefault();
          alert(
            "Resume is being updated. Please contact me directly for my latest resume!"
          );
          scrollToContact();
        }
        // If resume exists, let the default link behavior happen
      })
      .catch(() => {
        // Network error or file not found
        e.preventDefault();
        alert(
          "Resume is being updated. Please contact me directly for my latest resume!"
        );
        scrollToContact();
      });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center container-responsive py-20 sm:py-24 md:py-28 lg:py-32"
      aria-label="Hero section"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
        >
          {/* Main heading with responsive typography */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 8vw, 5rem)",
              lineHeight: "clamp(2.5rem, 9vw, 5.5rem)",
            }}
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

          {/* Subtitle with better responsive scaling */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1.125rem, 4vw, 2rem)",
              lineHeight: "clamp(1.5rem, 5vw, 2.5rem)",
            }}
          >
            A CSE student exploring{" "}
            <span className="text-gradient font-semibold">open-source</span>,{" "}
            <span className="text-gradient font-semibold">Linux</span>, and{" "}
            <span className="text-gradient font-semibold">the cloud</span>.
          </motion.p>

          {/* Description with responsive font sizing */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 max-w-3xl mx-auto leading-relaxed px-4"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              lineHeight: "clamp(1.5rem, 4vw, 1.875rem)",
            }}
          >
            Passionate about building elegant solutions, mastering Linux
            systems, and deploying applications on Microsoft Azure. Always
            learning, always coding.
          </motion.p>

          {/* Enhanced CTA Buttons with better mobile layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-5 md:gap-6 justify-center items-stretch xs:items-center px-4 max-w-md xs:max-w-2xl mx-auto"
            role="group"
            aria-label="Call to action buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="w-full xs:w-auto glass-button glow-border px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-4.5 font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent min-h-[52px]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              }}
              aria-label="Navigate to contact section"
            >
              Get In Touch
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full xs:w-auto glass-button px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-4.5 font-semibold rounded-xl flex items-center justify-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent min-h-[52px]"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              }}
              aria-label="Download resume (opens in new tab)"
            >
              <FiDownload
                aria-hidden="true"
                className="flex-shrink-0 text-lg sm:text-xl"
              />
              Resume
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links with better spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-4 sm:space-x-5 md:space-x-6 px-4"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map(({ icon: Icon, href, label, name }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="social-link"
                aria-label={label}
                role="listitem"
              >
                <Icon
                  className="text-xl sm:text-2xl md:text-2xl"
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Connect with Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl mx-auto px-4"
          >
            <div className="glass-card text-center">
              <h3
                className="font-semibold text-gradient mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                }}
              >
                Connect with Me
              </h3>
              <div className="flex flex-col xs:flex-row justify-center items-stretch xs:items-center gap-3 sm:gap-4 md:gap-5">
                <motion.a
                  href="https://github.com/Lalith-47/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-button justify-center w-full xs:w-auto min-w-[140px]"
                  aria-label="Visit Lalith's GitHub profile"
                >
                  <FiGithub
                    className="text-lg sm:text-xl flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base md:text-lg font-medium">
                    GitHub
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/lalithkumarm143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-button justify-center w-full xs:w-auto min-w-[140px]"
                  aria-label="Visit Lalith's LinkedIn profile"
                >
                  <FiLinkedin
                    className="text-lg sm:text-xl flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base md:text-lg font-medium">
                    LinkedIn
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Scroll Indicator with better positioning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
            aria-label="Scroll down indicator"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 md:w-7 md:h-11 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
              aria-hidden="true"
              onClick={() => {
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
