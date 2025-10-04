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
          transition={{ duration: 0.8 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group h-full"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex-shrink-0">
                  <category.icon className="text-xl sm:text-2xl text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Enhanced skill grid with better mobile layout */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 min-h-[80px] sm:min-h-[90px]"
                  >
                    <skill.icon
                      className="text-lg sm:text-2xl mb-1 sm:mb-2 transition-colors duration-300 flex-shrink-0"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs sm:text-sm text-white/80 text-center font-medium leading-tight">
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
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <h3
            className="font-bold text-gradient text-center mb-8 sm:mb-12"
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
              <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

              <div className="space-y-8 sm:space-y-12">
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
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      item.side === "left"
                        ? "sm:justify-start"
                        : "sm:justify-end"
                    } relative`}
                  >
                    {/* Mobile layout */}
                    <div className="sm:hidden w-full pl-12">
                      <div className="glass-card">
                        <h4 className="text-base sm:text-lg font-bold text-gradient mb-1 sm:mb-2">
                          {item.title}
                        </h4>
                        <p className="text-blue-300 font-semibold mb-2 sm:mb-3 text-sm">
                          {item.period}
                        </p>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div
                      className={`hidden sm:block w-5/12 ${
                        item.side === "right" ? "text-right" : ""
                      }`}
                    >
                      <div className="glass-card">
                        <h4 className="text-lg font-bold text-gradient mb-2">
                          {item.title}
                        </h4>
                        <p className="text-blue-300 font-semibold mb-3">
                          {item.period}
                        </p>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot - positioned for both mobile and desktop */}
                    <div className="absolute left-3 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 sm:border-4 border-slate-900"></div>
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
