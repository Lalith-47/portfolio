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

import React, { useState } from "react";
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
import Toast, { ToastType } from "@/components/Toast";

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

  // Toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("info");

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
   * Show toast notification
   */
  const showToastNotification = (message: string, type: ToastType) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  /**
   * Form submission handler
   * Sends data to Azure Function API endpoint
   * @param data - Form data from React Hook Form
   */
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Call Azure Function API
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log("Form submitted successfully:", data);
        setIsSubmitted(true);
        reset();
        showToastNotification(
          "Message sent successfully! I'll get back to you soon.",
          "success"
        );
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later or email me directly at Lalith22p3347@gmail.com";

      setSubmitError(errorMessage);
      showToastNotification(errorMessage, "error");
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
      value: "Bengaluru, India",
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
    <React.Fragment>
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <section id="contact" className="section-padding container-responsive">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <h2
              className="font-bold text-gradient mb-4 sm:mb-5 md:mb-6"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                lineHeight: "clamp(2.5rem, 7vw, 4rem)",
              }}
            >
              Get In Touch
            </h2>
            <p
              className="text-white/70 max-w-3xl mx-auto px-4 leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                lineHeight: "clamp(1.5rem, 4vw, 1.875rem)",
              }}
            >
              Let's connect! Whether you want to discuss a project, share ideas,
              or just say hello, I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card">
                <h3
                  className="font-bold text-gradient mb-4 sm:mb-5 md:mb-6"
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    lineHeight: "clamp(1.75rem, 3.5vw, 2.25rem)",
                  }}
                >
                  Let's Start a Conversation
                </h3>
                <p
                  className="text-white/80 leading-relaxed mb-6 sm:mb-7 md:mb-8"
                  style={{
                    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                    lineHeight: "clamp(1.375rem, 3.5vw, 1.625rem)",
                  }}
                >
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology. Feel free to
                  reach out through any of the channels below.
                </p>

                <div className="space-y-3.5 sm:space-y-4">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-3.5 md:gap-4"
                    >
                      <div className="p-3 sm:p-3.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex-shrink-0">
                        <item.icon
                          className="text-blue-400"
                          style={{
                            fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className="text-white/60 mb-0.5 sm:mb-1"
                          style={{
                            fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <motion.a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.01 }}
                            className="text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded break-words inline-block"
                            style={{
                              fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                            }}
                          >
                            {item.value}
                          </motion.a>
                        ) : (
                          <p
                            className="text-white"
                            style={{
                              fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                            }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-card">
                <h4
                  className="font-bold text-white mb-3 sm:mb-4"
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                  }}
                >
                  Quick Connect
                </h4>
                <div className="flex gap-3 sm:gap-3.5 md:gap-4">
                  {quickConnectLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      className="p-3.5 sm:p-4 md:p-4.5 glass rounded-xl hover:bg-white/20 transition-all duration-300 flex-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent min-h-[52px] sm:min-h-[56px]"
                      aria-label={`Connect via ${label}`}
                    >
                      <Icon
                        style={{
                          fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                        }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-card">
                <h3
                  className="font-bold text-gradient mb-4 sm:mb-5 md:mb-6"
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    lineHeight: "clamp(1.75rem, 3.5vw, 2.25rem)",
                  }}
                >
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                          className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 text-base ${
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
                          className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 text-base ${
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
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 text-base ${
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
                            message:
                              "Message must be less than 1000 characters",
                          },
                        })}
                        id="message"
                        rows={5}
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 glass border rounded-lg focus:outline-none transition-colors duration-300 text-white placeholder-white/50 resize-none text-base ${
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
    </React.Fragment>
  );
}
