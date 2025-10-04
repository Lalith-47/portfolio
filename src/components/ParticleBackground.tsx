import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Particles to reduce initial bundle size
const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    try {
      // Dynamically import and load the slim engine
      const { loadSlim } = await import("tsparticles-slim");
      await loadSlim(engine);
    } catch (error) {
      console.warn("Failed to load particles engine:", error);
    }
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // Particles loaded callback - can be used for debugging
    if (process.env.NODE_ENV === "development") {
      console.log("Particles loaded:", container);
    }
  }, []);

  // Memoize particle options for better performance
  const particleOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60, // Reduced from 120 for better performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push" as const,
          },
          onHover: {
            enable: true,
            mode: "repulse" as const,
          },
          resize: true as const,
        },
        modes: {
          push: {
            quantity: 2, // Reduced from 4
          },
          repulse: {
            distance: 150, // Reduced from 200
            duration: 0.3, // Reduced from 0.4
          },
        },
      },
      particles: {
        color: {
          value: ["#3b82f6", "#06b6d4", "#8b5cf6"],
        },
        links: {
          color: "#3b82f6",
          distance: 120, // Reduced from 150
          enable: true,
          opacity: 0.15, // Reduced from 0.2
          width: 1,
        },
        collisions: {
          enable: false, // Disabled for better performance
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 0.8, // Reduced from 1
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000, // Increased area to reduce particle density
          },
          value: 60, // Reduced from 80
        },
        opacity: {
          value: 0.25, // Reduced from 0.3
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 2.5 }, // Slightly reduced max size
        },
      },
      detectRetina: true,
      pauseOnBlur: true, // Pause when tab is not active
      pauseOnOutsideViewport: true, // Pause when not visible
    }),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 z-0"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={particleOptions}
      />
    </motion.div>
  );
}
