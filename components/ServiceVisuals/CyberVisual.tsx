"use client";

import { LockKeyhole, ShieldCheck } from "lucide-react";
import { ChartLines, HologramStage, MiniPanel, RingGauge } from "@/components/ServiceVisuals/SharedVisual";

export function CyberVisual() {
  return (
    <HologramStage>
      <svg viewBox="0 0 360 390" className="relative z-10 h-[260px] w-[260px] drop-shadow-[0_0_35px_rgba(0,213,255,.9)] sm:h-[390px] sm:w-[390px]" aria-hidden="true">
        <path d="M180 22L312 76V169C312 266 254 330 180 364C106 330 48 266 48 169V76L180 22Z" fill="rgba(0,140,255,.1)" stroke="#00D5FF" strokeWidth="4" />
        <g stroke="#008CFF" opacity=".75">
          {Array.from({ length: 42 }).map((_, i) => <line key={i} x1={66 + ((i * 41) % 230)} y1={78 + ((i * 29) % 240)} x2={66 + (((i + 4) * 37) % 230)} y2={78 + (((i + 9) * 23) % 240)} />)}
        </g>
      </svg>
      <LockKeyhole className="absolute z-20 h-20 w-20 text-cyan drop-shadow-[0_0_24px_rgba(0,213,255,.9)] sm:h-28 sm:w-28" />
      <MiniPanel title="Threat Detection" className="left-[2%] top-[1%] w-[47%] sm:left-[8%] sm:top-[13%] sm:w-52">
        <ChartLines />
        <span className="flex items-end justify-between">
          <span>Threats Blocked<b className="block text-lg text-cyan">1,245</b></span>
          <b className="text-cyan">+23%</b>
        </span>
      </MiniPanel>
      <MiniPanel title="Vulnerability Scan" className="left-[2%] bottom-[27%] w-[47%] sm:left-[8%] sm:bottom-[25%] sm:w-52">
        <RingGauge percent={87} label="System Secure" />
        <span className="mt-2 block text-slate-400">High Protection</span>
      </MiniPanel>
      <MiniPanel title="Security Status" className="right-[2%] top-[1%] w-[47%] sm:right-[8%] sm:top-[18%] sm:w-52">
        <span className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-cyan drop-shadow-[0_0_12px_rgba(0,213,255,.8)]" />
          <span><b className="block text-base text-white">Protected</b>All Systems Active</span>
        </span>
      </MiniPanel>
      <MiniPanel title="Attack Prevention" className="right-[2%] bottom-[27%] w-[47%] sm:right-[7%] sm:bottom-[20%] sm:w-52">
        <ChartLines />
        <span className="flex items-end justify-between">
          <span>Attacks Blocked<b className="block text-lg text-cyan">24,560</b></span>
          <b className="text-cyan">+18%</b>
        </span>
      </MiniPanel>
    </HologramStage>
  );
}
