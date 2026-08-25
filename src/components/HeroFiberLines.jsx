"use client";
import { useEffect, useMemo, useRef } from "react";

export default function HeroFiberLines({
  strands = 5,
  zIndex = 10,
  className,
  style,
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  const strandData = useMemo(() => {
    const count = Math.max(1, strands);
    const items = Array.from({ length: count }, (_, i) => ({
      y: 0.05 + i * (0.9 / Math.max(count - 1, 1)),
      amp: 18 + (i % 4) * 20,
      freq: 1.0 + (i % 3) * 0.45,
      phase: i * 0.75,
      speed: 0.1 + (i % 5) * 0.03,
      alpha: 0.1 + (i % 3) * 0.07,
      // color variant: 0=teal, 1=pink, 2=blue
      colorIdx: i % 3,
    }));
    return {
      strands: items,
      pulses: items.map((s, i) => ({
        s,
        t: i / items.length,
        v: 0.0014 + (i % 4) * 0.0006,
      })),
    };
  }, [strands]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;

    const pulses = strandData.pulses.map((p) => ({ ...p }));

    const COLORS = [
      // teal
      {
        line: (a) => `rgba(156,211,211,${a})`,
        glow0: "rgba(210,245,245,0.9)",
        glow1: "rgba(156,211,211,0.4)",
        glow2: "rgba(156,211,211,0)",
      },
      // pink / brand-secondary1
      {
        line: (a) => `rgba(204,27,104,${a})`,
        glow0: "rgba(255,125,180,0.9)",
        glow1: "rgba(204,27,104,0.4)",
        glow2: "rgba(204,27,104,0)",
      },
      // brand-primary blue
      {
        line: (a) => `rgba(33,58,143,${a})`,
        glow0: "rgba(100,140,230,0.85)",
        glow1: "rgba(33,58,143,0.4)",
        glow2: "rgba(33,58,143,0)",
      },
    ];

    const yAt = (s, p, t) =>
      h * s.y +
      Math.sin(p * Math.PI * s.freq * 2 + s.phase + t * s.speed * 4) * s.amp +
      Math.sin(p * Math.PI * 5 + t * s.speed * 2) * (s.amp * 0.2);

    const resize = () => {
      // Use offsetWidth/Height so it works even without an explicit height on the parent
      w = wrap.offsetWidth || window.innerWidth;
      h = wrap.offsetHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      raf = requestAnimationFrame(draw);
      if (!w || !h) return;

      ctx.clearRect(0, 0, w, h);
      const t = time * 0.001;

      // Draw wave strands
      strandData.strands.forEach((s) => {
        const color = COLORS[s.colorIdx];
        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const y = yAt(s, x / w, t);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color.line(s.alpha);
        ctx.lineWidth = 0.9;
        ctx.stroke();
      });

      // Draw travelling glows
      pulses.forEach((pl) => {
        if (!reduce) pl.t += pl.v;
        if (pl.t > 1.06) pl.t = -0.06;
        const p = Math.max(0, Math.min(1, pl.t));
        const x = p * w;
        const y = yAt(pl.s, p, t);
        const c = COLORS[pl.s.colorIdx];

        const g = ctx.createRadialGradient(x, y, 0, x, y, 44);
        g.addColorStop(0, c.glow0);
        g.addColorStop(0.22, c.glow1);
        g.addColorStop(1, c.glow2);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 44, 0, Math.PI * 2);
        ctx.fill();

        // bright centre dot
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.beginPath();
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    window.addEventListener("resize", resize);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [strandData]);

  return (
    <div
      ref={wrapRef}
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: zIndex,
        pointerEvents: "none",
        overflow: "hidden",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
