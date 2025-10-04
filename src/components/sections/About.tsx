import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

const terminalCommands = [
  { command: "$ whoami", output: "lalith@developer" },
  { command: "$ cat /etc/os-release", output: "Ubuntu 22.04 LTS / Arch Linux" },
  { command: "$ uptime", output: "1.5 years of Linux experience" },
  {
    command: "$ ls ~/skills/",
    output: "web-dev  linux  git  azure  python  javascript",
  },
  {
    command: "$ echo $MOTTO",
    output: '"Learn deeply, build simply, and let the code speak."',
  },
] as const;

export default function About() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<
    typeof terminalCommands
  >([]);
  const [isInView, setIsInView] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only start animation when component is in view and not already completed
    if (!isInView || currentCommand >= terminalCommands.length) return;

    timerRef.current = setInterval(() => {
      setDisplayedCommands((prev) => [
        ...prev,
        terminalCommands[currentCommand],
      ]);
      setCurrentCommand((prev) => prev + 1);
    }, 1500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentCommand, isInView]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Passionate about technology, open-source software, and continuous
            learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                onComplete: () => setIsInView(true),
              },
            }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div
              className="terminal"
              role="log"
              aria-live="polite"
              aria-label="Terminal output"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-green-500/30">
                <FiTerminal className="text-green-400" aria-hidden="true" />
                <span className="text-green-400 font-mono">
                  lalith@portfolio:~$
                </span>
              </div>

              <div className="space-y-3 min-h-[300px]">
                {displayedCommands.map((cmd, index) => (
                  <motion.div
                    key={`${cmd.command}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-400" aria-hidden="true">
                        $
                      </span>
                      <span className="text-white font-mono">
                        {cmd.command}
                      </span>
                    </div>
                    <div className="text-cyan-300 font-mono ml-4 pl-2 border-l border-green-500/30">
                      {cmd.output}
                    </div>
                  </motion.div>
                ))}

                {currentCommand < terminalCommands.length && (
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex items-center gap-2"
                    aria-hidden="true"
                  >
                    <span className="text-green-400">$</span>
                    <span className="text-white font-mono">_</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Hello, World! 🌍
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                I'm Lalith, a passionate second-year Computer Science and
                Engineering student with a deep love for technology and
                problem-solving. My journey in tech began with curiosity and has
                evolved into a genuine passion for creating meaningful software
                solutions.
              </p>
              <p className="text-white/80 leading-relaxed">
                For over 1.5 years, I've been immersed in the Linux ecosystem,
                exploring distributions like Ubuntu, Linux Mint, and Arch Linux
                with various desktop environments including KDE Plasma,
                Cinnamon, and GNOME.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                What Drives Me 🚀
              </h3>
              <ul className="space-y-3 text-white/80" role="list">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">
                    ▶
                  </span>
                  <span>
                    Building elegant web applications with modern technologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">
                    ▶
                  </span>
                  <span>
                    Exploring open-source projects and contributing to the
                    community
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">
                    ▶
                  </span>
                  <span>Mastering Linux systems and command-line tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1" aria-hidden="true">
                    ▶
                  </span>
                  <span>
                    Deploying and managing applications on Microsoft Azure
                  </span>
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-400/30"
            >
              <blockquote className="text-lg text-center italic text-blue-300">
                "Learn deeply, build simply, and let the code speak."
              </blockquote>
              <p className="text-center text-white/60 mt-2">
                - My Development Philosophy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
