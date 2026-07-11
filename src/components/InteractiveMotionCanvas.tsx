import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseX: number;
  baseY: number;
}

export const InteractiveMotionCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const colors = ['#0071E3', '#2997FF', '#BF5AF2', '#5E5CE6', '#64D2FF'];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.2
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    handleResize();

    let time = 0;
    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle glowing gradient waves in the background
      ctx.save();
      ctx.globalAlpha = 0.15;
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.7) * 200,
        canvas.height / 3 + Math.cos(time * 0.5) * 150,
        50,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.7
      );
      gradient.addColorStop(0, '#2997FF');
      gradient.addColorStop(0.5, '#BF5AF2');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Update and draw particles
      particles.forEach((p, index) => {
        // Natural drift + sine oscillation for cinematic floating effect
        p.x += p.vx + Math.sin(time + index) * 0.15;
        p.y += p.vy + Math.cos(time + index) * 0.15;

        // Wrap around edges cleanly
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse repulsion & attraction dynamics (Simulating 120Hz physics)
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 5;
          p.y -= Math.sin(angle) * force * 5;
        }

        // Draw particle node
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        // Connect nearby particles with subtle motion keyframe lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (distBetween < 130) {
            ctx.save();
            ctx.globalAlpha = (1 - distBetween / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#2997FF';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
