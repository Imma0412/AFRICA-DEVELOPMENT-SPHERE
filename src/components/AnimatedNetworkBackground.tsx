import { useEffect, useRef } from 'react';

type Props = {
  /** CSS color for the dots/lines, e.g. 'rgba(255,255,255,0.6)' */
  color?: string;
  /** How many particles to draw -- fewer = more subtle & better performance */
  density?: number;
  className?: string;
};

/**
 * A lightweight animated "constellation" background: dots drift slowly and
 * draw a connecting line to nearby dots. Pure canvas, no dependencies,
 * respects prefers-reduced-motion, and sits behind content (pointer-events
 * disabled) so it never blocks clicks.
 */
const AnimatedNetworkBackground = ({
  color = 'rgba(255,255,255,0.5)',
  density = 45,
  className = '',
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let animationId: number;

    type Particle = { x: number; y: number; vx: number; vy: number };
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Move & draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      // Connect nearby particles with a fading line
      const maxDist = Math.min(width, height) * 0.18;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = color.replace(
              /[\d.]+\)$/,
              `${(1 - dist / maxDist) * 0.35})`
            );
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    init();
    draw();

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [color, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default AnimatedNetworkBackground;