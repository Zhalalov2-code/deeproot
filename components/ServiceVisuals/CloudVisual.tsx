"use client";

import { ArrowDownUp, CircleCheck, Globe2 } from "lucide-react";
import { ChartLines, HologramStage, MiniPanel, RingGauge } from "@/components/ServiceVisuals/SharedVisual";

export function CloudVisual() {
  return (
    <HologramStage>
      <svg viewBox="0 0 420 280" className="relative z-10 h-[210px] w-[92%] overflow-visible drop-shadow-[0_0_30px_rgba(0,213,255,.9)] sm:h-[330px] sm:w-[500px]" aria-hidden="true">
        <path d="M126 218H310C361 218 392 185 392 144C392 103 359 72 318 74C297 31 255 12 211 25C174 36 151 65 143 101C105 94 70 122 70 160C70 193 94 218 126 218Z" fill="rgba(0,140,255,.1)" stroke="#00D5FF" strokeWidth="4" />
        <g stroke="#008CFF" opacity=".7">
          {Array.from({ length: 40 }).map((_, i) => (
            <line key={i} x1={70 + (i * 8) % 320} y1={228} x2={70 + (i * 8) % 320} y2={265} />
          ))}
        </g>
      </svg>
      <ArrowDownUp className="absolute z-20 h-16 w-16 text-cyan drop-shadow-[0_0_24px_rgba(0,213,255,.9)] sm:h-24 sm:w-24" />
      <MiniPanel title="Deployment" className="left-[2%] top-[1%] w-[47%] sm:left-[9%] sm:top-[16%] sm:w-52">
        <span className="flex items-center gap-3">
          <CircleCheck className="h-8 w-8 text-cyan drop-shadow-[0_0_12px_rgba(0,213,255,.8)]" />
          Successfully Deployed
        </span>
      </MiniPanel>
      <MiniPanel title="Cost Optimization" className="left-[2%] bottom-[4%] w-[47%] sm:left-[8%] sm:bottom-[22%] sm:w-52">
        <b className="text-3xl text-cyan drop-shadow-[0_0_14px_rgba(0,213,255,.7)]">-32%</b>
        <span className="mb-2 block text-slate-400">Savings this month</span>
        <ChartLines />
      </MiniPanel>
      <MiniPanel title="System Health" className="right-[2%] top-[1%] w-[47%] sm:right-[8%] sm:top-[21%] sm:w-52">
        <RingGauge percent={98} label="All Systems Operational" />
      </MiniPanel>
      <MiniPanel title="Global Network" className="right-[2%] bottom-[4%] w-[47%] sm:right-[6%] sm:bottom-[19%] sm:w-56">
        <span className="flex items-center gap-3">
          <Globe2 className="h-8 w-8 text-cyan drop-shadow-[0_0_12px_rgba(0,213,255,.8)]" />
          <span><b className="block text-lg text-cyan">24 Regions</b>Active</span>
        </span>
      </MiniPanel>
    </HologramStage>
  );
}
