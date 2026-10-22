import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse position for subtle interactive connectivity
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize);

    // Particles setup (neural nodes)
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen resolution
      const count = Math.min(Math.floor((width * height) / 22000), 65);

      for (let i = 0; i < count; i++) {
        const isPink = Math.random() < 0.28; // ~28% accent nodes
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: isPink ? Math.random() * 1.8 + 1.2 : Math.random() * 1.2 + 0.8,
          baseRadius: isPink ? 1.6 : 1.0,
          color: isPink ? '#F28AB2' : '#555555',
          alpha: Math.random() * 0.5 + 0.25,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        });
      }
    };

    initParticles();

    // Max distance for synaptic line connections
    const connectionDist = 130;

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update positions with subtle floating pulse
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Pulse size slightly
        p1.radius = p1.baseRadius + Math.sin(time + i) * 0.4;

        // Wrap around boundaries smoothly
        if (p1.x < -20) p1.x = width + 20;
        if (p1.x > width + 20) p1.x = -20;
        if (p1.y < -20) p1.y = height + 20;
        if (p1.y > height + 20) p1.y = -20;

        // Check connection to mouse
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const mouseAlpha = (1 - distMouse / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(242, 138, 178, ${mouseAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Connect nearby particles (neural synaptic net)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.16;
            const isHighlighted = p1.color === '#F28AB2' || p2.color === '#F28AB2';

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isHighlighted
              ? `rgba(242, 138, 178, ${lineAlpha * 1.4})`
              : `rgba(160, 160, 160, ${lineAlpha * 0.8})`;
            ctx.lineWidth = isHighlighted ? 0.75 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);

        if (p.color === '#F28AB2') {
          // Node with subtle halo
          ctx.fillStyle = `rgba(242, 138, 178, ${p.alpha})`;
          ctx.shadowColor = '#F28AB2';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(180, 180, 180, ${p.alpha * 0.6})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Neural Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-65"
      />

      {/* Ambient glowing radial orbs drifting gently */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#F28AB2]/[0.035] rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[60%] right-[15%] w-[600px] h-[600px] bg-[#F28AB2]/[0.025] rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[130px]" />
    </div>
  );
};
