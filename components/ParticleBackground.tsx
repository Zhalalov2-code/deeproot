"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pre-render a soft glow sprite once. Drawing this sprite per particle is far
    // cheaper than ctx.shadowBlur, which is the main cause of jank on Windows/Chrome.
    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = 32;
    const sctx = sprite.getContext("2d");
    if (sctx) {
      const glow = sctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      glow.addColorStop(0, "rgba(0, 213, 255, 0.95)");
      glow.addColorStop(0.35, "rgba(0, 213, 255, 0.5)");
      glow.addColorStop(1, "rgba(0, 213, 255, 0)");
      sctx.fillStyle = glow;
      sctx.fillRect(0, 0, 32, 32);
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scale particle count to viewport area so small/laptop screens stay light.
    const particleCount = () => {
      if (reducedMotion) return Math.min(50, Math.round((width * height) / 30000));
      return Math.min(110, Math.round((width * height) / 18000));
    };

    let particles = createParticles(particleCount());

    function createParticles(count: number) {
      return Array.from({ length: count }, (_, index) => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.00032,
        vy: (Math.random() - 0.5) * 0.00024,
        phase: index * 0.31
      }));
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Cap DPR at 1.5 — on Windows 150% scaling this halves the fill cost vs 2x.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(particleCount());
    };

    let frame = 0;
    let animation = 0;
    let last = 0;
    const xs = new Float32Array(240);
    const ys = new Float32Array(240);
    const linkDistance = 130;
    const linkDistanceSq = linkDistance * linkDistance;

    const render = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.62, height * 0.42, 0, width * 0.62, height * 0.42, Math.max(width, height) * 0.72);
      gradient.addColorStop(0, "rgba(0, 140, 255, 0.12)");
      gradient.addColorStop(0.48, "rgba(0, 213, 255, 0.035)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const count = particles.length;
      for (let index = 0; index < count; index += 1) {
        const p = particles[index];
        if (!reducedMotion) {
          p.x = (p.x + p.vx + 1) % 1;
          p.y = (p.y + p.vy + 1) % 1;
        }
        const x = p.x * width;
        const y = p.y * height;
        xs[index] = x;
        ys[index] = y;
        const twinkle = 0.32 + Math.sin(frame * 0.02 + p.phase) * 0.24;
        ctx.globalAlpha = twinkle;
        const size = p.r * 5;
        ctx.drawImage(sprite, x - size, y - size, size * 2, size * 2);
      }

      // Link nearby particles.
      ctx.lineWidth = 0.7;
      for (let i = 0; i < count; i += 1) {
        const xi = xs[i];
        const yi = ys[i];
        for (let j = i + 1; j < count; j += 1) {
          const dx = xs[j] - xi;
          const dy = ys[j] - yi;
          const distanceSq = dx * dx + dy * dy;
          if (distanceSq < linkDistanceSq) {
            ctx.globalAlpha = (1 - Math.sqrt(distanceSq) / linkDistance) * 0.18;
            ctx.strokeStyle = i % 4 === 0 ? "#00D5FF" : "#008CFF";
            ctx.beginPath();
            ctx.moveTo(xi, yi);
            ctx.lineTo(xs[j], ys[j]);
            ctx.stroke();
          }
        }
      }

      // Flowing horizontal streams.
      ctx.globalAlpha = 0.16;
      ctx.strokeStyle = "#00D5FF";
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i += 1) {
        const y = ((frame * 0.9 + i * 190) % (height + 180)) - 90;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(width * 0.25, y - 50, width * 0.65, y + 70, width, y - 10);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    // Throttle to ~30fps: ambient motion looks the same but halves the work.
    const frameInterval = 1000 / 30;
    const loop = (now: number) => {
      animation = requestAnimationFrame(loop);
      if (document.hidden) return;
      if (now - last < frameInterval) return;
      last = now;
      render();
    };

    const handleResize = () => {
      resize();
      if (reducedMotion) render();
    };

    resize();
    render();
    if (!reducedMotion) animation = requestAnimationFrame(loop);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-95" />;
}
