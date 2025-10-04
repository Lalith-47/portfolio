import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiCloud,
  FiTerminal,
  FiSettings,
  FiMonitor,
  FiServer,
} from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiLinux,
  SiUbuntu,
  SiArchlinux,
  SiGit,
  SiGithub,
  SiMicrosoftazure,
  SiDocker,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Web Development",
    icon: FiCode,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Linux & Systems",
    icon: FiTerminal,
    skills: [
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
      { name: "Arch Linux", icon: SiArchlinux, color: "#1793D1" },
      { name: "KDE Plasma", icon: FiMonitor, color: "#1D99F3" },
      { name: "GNOME", icon: FiSettings, color: "#4A90E2" },
      { name: "Bash/Shell", icon: FiTerminal, color: "#4EAA25" },
    ],
  },
  {
    title: "Version Control",
    icon: FiGitBranch,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Version Control", icon: FiGitBranch, color: "#F05032" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    skills: [
      { name: "Microsoft Azure", icon: SiMicrosoftazure, color: "#0078D4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Static Web Apps", icon: FiServer, color: "#0078D4" },
    ],
  },
  {
    title: "Languages",
    icon: FiCode,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience and
            continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                  <category.icon className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                    className="flex flex-col items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <skill.icon
                      className="text-2xl mb-2 transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-white/80 text-center font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-12">
            Learning Journey
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

              <div className="space-y-12">
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
                      item.side === "left" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
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

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900"></div>
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
