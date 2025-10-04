/**
 * Optimized Particle Background Component
 *
 * GPU-accelerated particle animation with dynamic performance optimization.
 * Automatically disables or reduces particles on low-end devices.
 *
 * @author AI Assistant
 * @version 2.0.0
 */

import { useEffect, useRef, memo } from "react";
import { usePerformance } from "@/contexts/PerformanceContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const ParticleBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);

  const { animationSettings, deviceInfo } = usePerformance();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !animationSettings.enableParticles) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Optimize for animation
    });

    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const count = animationSettings.particleCount;

      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    initParticles();

    // Animation loop with performance optimization
    const animate = (currentTime: number) => {
      // Throttle to ~30fps on low-end devices
      const targetFPS = deviceInfo.isLowEndDevice ? 30 : 60;
      const frameDelay = 1000 / targetFPS;

      if (currentTime - lastFrameTimeRef.current < frameDelay) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      lastFrameTimeRef.current = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections (only on high-end devices)
      if (!deviceInfo.isLowEndDevice && particlesRef.current.length <= 40) {
        const maxDistance = 100;

        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const dx = particlesRef.current[i].x - particlesRef.current[j].x;
            const dy = particlesRef.current[i].y - particlesRef.current[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
              ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
              const opacity = (1 - distance / maxDistance) * 0.2;
              ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [animationSettings, deviceInfo]);

  // Don't render if particles are disabled
  if (!animationSettings.enableParticles) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        willChange: "transform",
        transform: "translateZ(0)", // GPU acceleration
      }}
      aria-hidden="true"
    />
  );
});

ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;
