"use client";

import { MiniPanel } from "@/components/ServiceVisuals/SharedVisual";

export function SoftwareVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[8%] top-[26%] h-[240px] w-[84%] rotate-6 overflow-hidden rounded-xl border border-cyan/60 bg-[linear-gradient(145deg,rgba(4,16,38,.86),rgba(1,6,16,.64))] shadow-[0_0_75px_rgba(0,213,255,.42),inset_0_0_42px_rgba(0,140,255,.12)] backdrop-blur-xl sm:left-[27%] sm:top-[23%] sm:h-[310px] sm:w-[min(470px,68%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_100%,rgba(0,213,255,.16),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
        <div className="h-8 border-b border-neon/25 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-cyan">deeproot.app</div>
        <pre className="p-6 text-[11px] leading-6 text-slate-200">
{`import DeepRoot as dr

def solve(problem):
    root = dr.Root()
    analysis = root.analyze(problem)
    solution = root.build(analysis)
    return solution`}
        </pre>
      </div>
      <div className="absolute left-[8%] top-[64%] h-24 w-[84%] rotate-6 rounded-[50%] border border-cyan/40 bg-neon/10 shadow-[0_0_70px_rgba(0,213,255,.32)] blur-[1px] sm:left-[23%] sm:top-[62%] sm:w-[min(560px,74%)]" />
      <div className="absolute left-[42%] top-[69%] h-3 w-3 rounded-full bg-cyan shadow-[0_0_34px_14px_rgba(0,213,255,.55)]" />
      <MiniPanel title="Frontend" className="left-[2%] top-[1%] w-[47%] sm:left-[5%] sm:top-[10%] sm:w-44" delay={0.1}>React · Vue · Angular</MiniPanel>
      <MiniPanel title="Backend" className="left-[2%] bottom-[6%] w-[47%] sm:bottom-auto sm:left-[7%] sm:top-[38%] sm:w-40" delay={0.2}>Node.js · Python · .NET</MiniPanel>
      <MiniPanel title="Database" className="right-[2%] top-[1%] w-[47%] sm:right-[4%] sm:top-[14%] sm:w-48" delay={0.3}>PostgreSQL<br />MongoDB<br />MySQL</MiniPanel>
      <MiniPanel title="DevOps" className="right-[2%] bottom-[6%] w-[47%] sm:bottom-auto sm:right-[7%] sm:top-[40%] sm:w-48" delay={0.4}>Docker · Kubernetes · AWS</MiniPanel>
      <MiniPanel title="Security" className="hidden sm:block sm:right-[2%] sm:top-[65%] sm:w-52" delay={0.5}>Secure Code<br />Data Protection<br />Best Practices</MiniPanel>
      <svg className="absolute inset-0 hidden h-full w-full sm:block" aria-hidden="true">
        <g stroke="#00D5FF" strokeWidth="1.3" opacity=".7">
          {[
            ["25%", "20%", "40%", "36%"],
            ["25%", "47%", "40%", "47%"],
            ["72%", "24%", "86%", "22%"],
            ["70%", "47%", "86%", "48%"],
            ["69%", "60%", "86%", "73%"]
          ].map(([x1, y1, x2, y2], index) => (
            <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray="8 12">
              <animate attributeName="stroke-dashoffset" from="0" to="-120" dur={`${5 + index}s`} repeatCount="indefinite" />
            </line>
          ))}
        </g>
      </svg>
    </div>
  );
}
