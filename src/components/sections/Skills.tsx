import { motion } from "framer-motion";
import { FiCode, FiTerminal } from "react-icons/fi";
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiOracle,
  SiLinux,
  SiUbuntu,
  SiArchlinux,
  SiGit,
  SiGithub,
  SiMicrosoftazure,
  SiNotion,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FiCode,
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Java", icon: SiOracle, color: "#007396" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Linux & Systems",
    icon: FiTerminal,
    skills: [
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
      { name: "Arch Linux", icon: SiArchlinux, color: "#1793D1" },
      { name: "Bash/Shell", icon: FiTerminal, color: "#4EAA25" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: FiCode,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Azure", icon: SiMicrosoftazure, color: "#0078D4" },
      { name: "Notion", icon: SiNotion, color: "#000000" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding container-responsive">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            className="font-bold text-gradient mb-4 sm:mb-6"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: "clamp(2.5rem, 7vw, 4rem)",
            }}
          >
            Skills & Technologies
          </h2>
          <p
            className="text-white/70 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              lineHeight: "clamp(1.5rem, 4vw, 1.875rem)",
            }}
          >
            A comprehensive toolkit built through hands-on experience and
            continuous learning
          </p>
        </motion.div>

        {/* Enhanced responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
              viewport={{ once: true }}
              className="glass-card group h-full"
            >
              <div className="flex items-center gap-3 md:gap-3.5 mb-5 sm:mb-6">
                <div className="p-2.5 sm:p-3 md:p-3.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex-shrink-0">
                  <category.icon
                    className="text-blue-400"
                    style={{
                      fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    }}
                  />
                </div>
                <h3
                  className="font-bold text-white group-hover:text-gradient transition-all duration-300"
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Enhanced skill grid with better mobile layout */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.05 + skillIndex * 0.03,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center justify-center p-3 sm:p-3.5 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 min-h-[90px] sm:min-h-[95px] md:min-h-[100px]"
                  >
                    <skill.icon
                      className="mb-2 sm:mb-2.5 transition-colors duration-300 flex-shrink-0"
                      style={{
                        color: skill.color,
                        fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                      }}
                    />
                    <span
                      className="text-white/80 text-center font-medium leading-tight"
                      style={{
                        fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                      }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Experience Timeline with better mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <h3
            className="font-bold text-gradient text-center mb-6 sm:mb-8 md:mb-12"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              lineHeight: "clamp(2rem, 6vw, 3rem)",
            }}
          >
            Learning Journey
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Enhanced timeline line for mobile and desktop */}
              <div className="absolute left-3 sm:left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

              <div className="space-y-6 sm:space-y-8 md:space-y-12">
                {[
                  {
                    period: "2024 - Present",
                    title: "Advanced Web Development",
                    description:
                      "Mastering modern frameworks like Next.js, exploring cloud deployment on Azure, and building full-stack applications.",
                    side: "left",
                  },
                  {
                    period: "2023 - 2024",
                    title: "Linux Mastery",
                    description:
                      "Deep dive into Linux distributions, desktop environments, and system administration. Over 1.5 years of hands-on experience.",
                    side: "right",
                  },
                  {
                    period: "2022 - 2023",
                    title: "Programming Foundations",
                    description:
                      "Started my journey with Python and JavaScript. Built first web applications and discovered passion for open-source.",
                    side: "left",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      item.side === "left"
                        ? "md:justify-start"
                        : "md:justify-end"
                    } relative`}
                  >
                    {/* Mobile & Tablet layout */}
                    <div className="md:hidden w-full pl-11 sm:pl-14">
                      <div className="glass-card">
                        <h4
                          className="font-bold text-gradient mb-2 sm:mb-2.5"
                          style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-blue-300 font-semibold mb-2.5 sm:mb-3"
                          style={{
                            fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
                          }}
                        >
                          {item.period}
                        </p>
                        <p
                          className="text-white/70 leading-relaxed"
                          style={{
                            fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                            lineHeight: "clamp(1.375rem, 3.5vw, 1.625rem)",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div
                      className={`hidden md:block w-5/12 ${
                        item.side === "right" ? "text-right" : ""
                      }`}
                    >
                      <div className="glass-card">
                        <h4
                          className="font-bold text-gradient mb-2 md:mb-2.5 lg:mb-3"
                          style={{
                            fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-blue-300 font-semibold mb-3 md:mb-3.5"
                          style={{
                            fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          }}
                        >
                          {item.period}
                        </p>
                        <p
                          className="text-white/70 leading-relaxed"
                          style={{
                            fontSize: "clamp(0.875rem, 2vw, 1rem)",
                            lineHeight: "clamp(1.375rem, 3vw, 1.625rem)",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot - positioned for mobile, tablet, and desktop */}
                    <div className="absolute left-3 sm:left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 md:border-3 lg:border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
