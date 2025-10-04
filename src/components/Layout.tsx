import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePerformance, useDeviceClass } from "@/contexts/PerformanceContext";
import Navbar from "./Navbar";

// Lazy load heavy components with performance optimization
const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
  loading: () => null,
});

const Hero = dynamic(() => import("./sections/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("./sections/About"), {
  ssr: true,
});

const Skills = dynamic(() => import("./sections/Skills"), {
  ssr: true,
});

const Contact = dynamic(() => import("./sections/Contact"), {
  ssr: true,
});

const Footer = dynamic(() => import("./Footer"), {
  ssr: true,
});

const PerformanceMonitor = dynamic(() => import("./PerformanceMonitor"), {
  ssr: false,
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const deviceClass = useDeviceClass();
  const { animationSettings } = usePerformance();

  return (
    <div className={`relative min-h-screen ${deviceClass}`}>
      {/* Only render particles if enabled */}
      {animationSettings.enableParticles && <ParticleBackground />}

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Contact />
        {children}
      </main>

      <Footer />

      {/* Performance monitor (dev only) */}
      <PerformanceMonitor />
    </div>
  );
}
