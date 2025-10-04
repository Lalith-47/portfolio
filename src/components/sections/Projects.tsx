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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of my work in web development, Linux systems, and cloud
            technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-white/20`}
                    >
                      <project.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg glass hover:bg-white/20 transition-colors duration-300"
                      aria-label="View on GitHub"
                    >
                      <FiGithub className="text-lg" />
                    </motion.a>

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg glass hover:bg-white/20 transition-colors duration-300"
                        aria-label="View live demo"
                      >
                        <FiExternalLink className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project description */}
                <p className="text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300"
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

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Explore More Projects
            </h3>
            <p className="text-white/70 mb-6">
              Check out my GitHub profile for more projects, contributions, and
              code samples. I'm always working on something new!
            </p>
            <motion.a
              href="https://github.com/Lalith-47/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 glass-button glow-border px-8 py-4 text-lg font-semibold rounded-xl"
              aria-label="Visit Lalith's GitHub profile"
            >
              <FiGithub />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
