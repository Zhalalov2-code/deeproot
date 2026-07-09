"use client";

import { Database, Server, Workflow } from "lucide-react";
import { HologramStage, MiniPanel } from "@/components/ServiceVisuals/SharedVisual";

export function IntegrationVisual() {
  const nodes = [
    { x: "22%", y: "35%", icon: Server, label: "ERP" },
    { x: "74%", y: "28%", icon: Database, label: "CRM" },
    { x: "28%", y: "72%", icon: Workflow, label: "API" },
    { x: "78%", y: "68%", icon: Server, label: "Cloud" }
  ];

  return (
    <HologramStage>
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g stroke="#00D5FF" strokeWidth="2" opacity=".55">
          <line x1="22%" y1="35%" x2="50%" y2="50%" />
          <line x1="74%" y1="28%" x2="50%" y2="50%" />
          <line x1="28%" y1="72%" x2="50%" y2="50%" />
          <line x1="78%" y1="68%" x2="50%" y2="50%" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/70 bg-neon/15 shadow-[0_0_60px_rgba(0,213,255,.55)] sm:h-36 sm:w-36">
        <Workflow className="h-10 w-10 text-cyan sm:h-16 sm:w-16" />
      </div>
      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className="glass-panel absolute z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full sm:h-28 sm:w-28" style={{ left: node.x, top: node.y }}>
            <Icon className="h-6 w-6 text-cyan sm:h-9 sm:w-9" />
            <span className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-slate-200 sm:mt-2 sm:text-xs">{node.label}</span>
          </div>
        );
      })}
      <MiniPanel title="Live API Mesh" className="left-[2%] top-[1%] w-[54%] sm:left-[4%] sm:top-[13%] sm:w-48">Encrypted requests</MiniPanel>
      <MiniPanel title="Automation Flow" className="right-[2%] bottom-[2%] w-[60%] sm:right-[5%] sm:bottom-[18%] sm:w-52">Events · Tasks · Reports</MiniPanel>
    </HologramStage>
  );
}
