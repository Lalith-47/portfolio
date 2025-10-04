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
    Array<{ command: string; output: string }>
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
    <section id="about" className="section-padding container-responsive">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
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
            About Me
          </h2>
          <p
            className="text-white/70 max-w-4xl mx-auto leading-relaxed px-4"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              lineHeight: "clamp(1.5rem, 4vw, 1.875rem)",
            }}
          >
            Passionate about technology, open-source software, and continuous
            learning
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Terminal + What Drives Me */}
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
            className="order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-8"
          >
            <div
              className="terminal"
              role="log"
              aria-live="polite"
              aria-label="Terminal output"
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-green-500/30">
                <FiTerminal className="text-green-400 text-sm sm:text-base" aria-hidden="true" />
                <span className="text-green-400 font-mono text-xs sm:text-sm">
                  lalith@portfolio:~$
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3 min-h-[250px] sm:min-h-[300px]">
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

            {/* Philosophy Quote Card - Now under terminal */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-400/30"
            >
              <blockquote className="text-sm sm:text-base md:text-lg text-center italic text-blue-300 leading-relaxed px-2">
                "Learn deeply, build simply, and let the code speak."
              </blockquote>
              <p className="text-center text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm">
                - My Development Philosophy
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Introduction + What Drives Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Introduction Card */}
            <div className="glass-card">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient mb-3 sm:mb-4 md:mb-5">
                Hello, World! 🌍
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  I'm Lalith, a passionate second-year Computer Science and
                  Engineering student with a deep love for technology and
                  problem-solving. My journey in tech began with curiosity and
                  has evolved into a genuine passion for creating meaningful
                  software solutions.
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  For over 1.5 years, I've been immersed in the Linux ecosystem,
                  exploring distributions like Ubuntu, Linux Mint, and Arch
                  Linux with various desktop environments including KDE Plasma,
                  Cinnamon, and GNOME.
                </p>
              </div>
            </div>

            {/* What Drives Me Card - Now under Hello World */}
            <div className="glass-card">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient mb-3 sm:mb-4 md:mb-5">
                What Drives Me 🚀
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 md:space-y-4" role="list">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-blue-400 mt-1 flex-shrink-0 text-xs sm:text-sm md:text-base"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  <span className="text-white/80 leading-relaxed text-sm sm:text-base">
                    Building elegant web applications with modern technologies
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-blue-400 mt-1 flex-shrink-0 text-xs sm:text-sm md:text-base"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  <span className="text-white/80 leading-relaxed text-sm sm:text-base">
                    Exploring open-source projects and contributing to the
                    community
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-blue-400 mt-1 flex-shrink-0 text-xs sm:text-sm md:text-base"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  <span className="text-white/80 leading-relaxed text-sm sm:text-base">
                    Mastering Linux systems and command-line tools
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span
                    className="text-blue-400 mt-1 flex-shrink-0 text-xs sm:text-sm md:text-base"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                  <span className="text-white/80 leading-relaxed text-sm sm:text-base">
                    Deploying and managing applications on Microsoft Azure
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
