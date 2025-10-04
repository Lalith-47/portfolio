import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiServer,
  FiCloud,
  FiMonitor,
} from "react-icons/fi";

// Social and Personal Links - Update these URLs as needed
const projects = [
  {
    title: "Azure Task Manager",
    description:
      "A full-stack task management application built with Next.js and deployed on Microsoft Azure Static Web Apps. Features real-time updates, user authentication, and responsive design.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Azure",
      "PostgreSQL",
    ],
    github: "https://github.com/Lalith-47/azure-task-manager",
    live: "https://task-manager.azurestaticapps.net",
    icon: FiCloud,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Linux System Monitor",
    description:
      "A terminal-based system monitoring tool written in Python. Displays real-time CPU, memory, and disk usage with beautiful ASCII charts and customizable alerts.",
    technologies: ["Python", "Linux", "Bash", "Curses", "System APIs"],
    github: "https://github.com/Lalith-47/linux-system-monitor",
    live: null,
    icon: FiMonitor,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "DevOps Dashboard",
    description:
      "A comprehensive dashboard for monitoring CI/CD pipelines and server metrics. Built with React and integrates with GitHub Actions and Azure DevOps.",
    technologies: ["React", "Node.js", "Express", "GitHub API", "Chart.js"],
    github: "https://github.com/Lalith-47/devops-dashboard",
    live: "https://devops-dashboard.azurestaticapps.net",
    icon: FiServer,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Open Source Contributions",
    description:
      "Active contributor to various open-source projects including Linux utilities, web frameworks, and developer tools. Passionate about giving back to the community.",
    technologies: ["Various", "Git", "GitHub", "Open Source"],
    github: "https://github.com/Lalith-47/",
    live: null,
    icon: FiCode,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding container-responsive">
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
            Featured Projects
          </h2>
          <p
            className="text-white/70 max-w-4xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              lineHeight: "clamp(1.5rem, 4vw, 1.875rem)",
            }}
          >
            A showcase of my work in web development, Linux systems, and cloud
            technologies
          </p>
        </motion.div>

        {/* Enhanced responsive project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card group relative overflow-hidden h-full flex flex-col"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Enhanced project header with better mobile layout */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-6 gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div
                      className={`p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-white/20 flex-shrink-0`}
                    >
                      <project.icon className="text-base sm:text-lg md:text-2xl text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 truncate">
                      {project.title}
                    </h3>
                  </div>

                  {/* Enhanced action buttons with better touch targets */}
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 sm:p-2.5 md:p-3 rounded-lg glass hover:bg-white/20 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub className="text-sm sm:text-base md:text-lg" />
                    </motion.a>

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 sm:p-2.5 md:p-3 rounded-lg glass hover:bg-white/20 transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FiExternalLink className="text-sm sm:text-base md:text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project description with responsive text */}
                <p className="text-white/80 leading-relaxed mb-3 sm:mb-4 md:mb-6 flex-grow text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Enhanced technology tags with better mobile layout */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced GitHub CTA section with responsive design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card max-w-2xl mx-auto">
            <h3
              className="font-bold text-gradient mb-3 sm:mb-4"
              style={{
                fontSize: "clamp(1.25rem, 4vw, 2rem)",
                lineHeight: "clamp(1.75rem, 5vw, 2.5rem)",
              }}
            >
              Explore More Projects
            </h3>
            <p
              className="text-white/70 mb-4 sm:mb-6 leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                lineHeight: "clamp(1.25rem, 3.5vw, 1.5rem)",
              }}
            >
              Check out my GitHub profile for more projects, contributions, and
              code samples. I'm always working on something new!
            </p>
            <motion.a
              href="https://github.com/Lalith-47/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 glass-button glow-border px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent min-h-[48px]"
              aria-label="Visit Lalith's GitHub profile"
            >
              <FiGithub className="flex-shrink-0" />
              <span>View GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
