/**
 * Contact Section Component
 *
 * Professional contact form and information section featuring:
 * - Responsive contact form with validation using React Hook Form
 * - Contact information cards with social links
 * - Form submission handling with loading states and error handling
 * - Accessibility-compliant form elements with proper ARIA labels
 * - Glassmorphism design with smooth animations
 *
 * @author Lalith
 * @version 1.0.0
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMapPin,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";

/**
 * Form data interface for type safety
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact information item interface
 */
interface ContactInfoItem {
  icon: typeof FiMail;
  label: string;
  value: string;
  href: string | null;
}

/**
 * Contact Component
 *
 * Main contact section with form validation and submission handling.
 * Integrates with React Hook Form for robust form management.
 */
export default function Contact() {
  // Form state management
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // React Hook Form setup with validation mode
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onBlur", // Validate on blur for better UX
  });

  /**
   * Form submission handler
   * Uses Web3Forms API for free, serverless form submission
   * @param data - Form data from React Hook Form
   */
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Web3Forms endpoint - Free tier: 250 submissions/month
      // Sign up at: https://web3forms.com/ to get your access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // TODO: Get free key from https://web3forms.com/
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `New Portfolio Contact from ${data.name}`,
          from_name: "Lalith's Portfolio Website",
          to_email: "Lalith22p3347@gmail.com",
          // Optional: Add honeypot for spam protection
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later or email me directly at Lalith22p3347@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social and Personal Links - Update these URLs as needed
  const contactInfo: ContactInfoItem[] = [
    {
      icon: FiMail,
      label: "Email",
      value: "Lalith22p3347@gmail.com",
      href: "mailto:Lalith22p3347@gmail.com",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "github.com/Lalith-47",
      href: "https://github.com/Lalith-47/",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lalithkumarm143",
      href: "https://www.linkedin.com/in/lalithkumarm143/",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  const quickConnectLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/Lalith-47/",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/lalithkumarm143/",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:Lalith22p3347@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="section-padding container-responsive">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Let's connect! Whether you want to discuss a project, share ideas,
            or just say hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology. Feel free to
                reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                      <item.icon
                        className="text-xl text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{item.label}</p>
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                        >
                          {item.value}
                        </motion.a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card">
              <h4 className="text-lg font-bold text-white mb-4">
                Quick Connect
              </h4>
              <div className="flex gap-4">
                {quickConnectLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 glass rounded-xl hover:bg-white/20 transition-all duration-300 flex-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label={`Connect via ${label}`}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="text-2xl text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-green-400 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/70 mb-4">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="glass-button px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                    >
                      <FiAlertCircle className="flex-shrink-0" />
                      <span className="text-sm">{submitError}</span>
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white/80 mb-2 text-sm font-medium"
                      >
                        Name *
                      </label>
                      <input
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                          maxLength: {
                            value: 50,
                            message: "Name must be less than 50 characters",
                          },
                        })}
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-400"
                            : "border-white/20 focus:border-blue-400"
                        }`}
                        placeholder="Your name"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-400 text-sm mt-1 flex items-center gap-1"
                        >
                          <FiAlertCircle size={14} />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/80 mb-2 text-sm font-medium"
                      >
                        Email *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-400"
                            : "border-white/20 focus:border-blue-400"
                        }`}
                        placeholder="your.email@example.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-400 text-sm mt-1 flex items-center gap-1"
                        >
                          <FiAlertCircle size={14} />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white/80 mb-2 text-sm font-medium"
                    >
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 5,
                          message: "Subject must be at least 5 characters",
                        },
                        maxLength: {
                          value: 100,
                          message: "Subject must be less than 100 characters",
                        },
                      })}
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 ${
                        errors.subject
                          ? "border-red-500/50 focus:border-red-400"
                          : "border-white/20 focus:border-blue-400"
                      }`}
                      placeholder="What's this about?"
                      aria-invalid={errors.subject ? "true" : "false"}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <FiAlertCircle size={14} />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white/80 mb-2 text-sm font-medium"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                        maxLength: {
                          value: 1000,
                          message: "Message must be less than 1000 characters",
                        },
                      })}
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-400"
                          : "border-white/20 focus:border-blue-400"
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <FiAlertCircle size={14} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full glass-button glow-border px-8 py-4 text-lg font-semibold rounded-xl flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
