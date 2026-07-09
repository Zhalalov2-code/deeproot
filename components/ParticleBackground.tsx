"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animation = 0;
    const particles = Array.from({ length: reducedMotion ? 60 : 175 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.9 + 0.3,
      vx: (Math.random() - 0.5) * 0.00034,
      vy: (Math.random() - 0.5) * 0.00026,
      phase: index * 0.31
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      frame += 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(width * 0.62, height * 0.42, 0, width * 0.62, height * 0.42, Math.max(width, height) * 0.72);
      gradient.addColorStop(0, "rgba(0, 140, 255, 0.12)");
      gradient.addColorStop(0.48, "rgba(0, 213, 255, 0.035)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      const xs = new Float32Array(particles.length);
      const ys = new Float32Array(particles.length);
      ctx.fillStyle = "rgba(0, 213, 255, 0.82)";
      ctx.shadowColor = "#00D5FF";
      ctx.shadowBlur = 8;
      particles.forEach((p, index) => {
        if (!reducedMotion) {
          p.x = (p.x + p.vx + 1) % 1;
          p.y = (p.y + p.vy + 1) % 1;
        }
        const x = p.x * width;
        const y = p.y * height;
        xs[index] = x;
        ys[index] = y;
        ctx.globalAlpha = 0.22 + Math.sin(frame * 0.02 + p.phase) * 0.26;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      const linkDistance = 145;
      const linkDistanceSq = linkDistance * linkDistance;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = xs[j] - xs[i];
          const dy = ys[j] - ys[i];
          const distanceSq = dx * dx + dy * dy;
          if (distanceSq < linkDistanceSq) {
            ctx.globalAlpha = (1 - Math.sqrt(distanceSq) / linkDistance) * 0.2;
            ctx.strokeStyle = i % 4 === 0 ? "#00D5FF" : "#008CFF";
            ctx.lineWidth = i % 7 === 0 ? 1.05 : 0.7;
            ctx.beginPath();
            ctx.moveTo(xs[i], ys[i]);
            ctx.lineTo(xs[j], ys[j]);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = "#00D5FF";
      ctx.lineWidth = 1;
      for (let i = 0; i < 9; i += 1) {
        const y = ((frame * 0.45 + i * 130) % (height + 180)) - 90;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(width * 0.25, y - 50, width * 0.65, y + 70, width, y - 10);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (!reducedMotion) animation = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      if (reducedMotion) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-95" />;
}
