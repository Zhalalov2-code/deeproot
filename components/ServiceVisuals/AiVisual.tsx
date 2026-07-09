"use client";

import { ChartLines, HologramStage, MiniPanel } from "@/components/ServiceVisuals/SharedVisual";

export function AiVisual() {
  return (
    <HologramStage>
      <svg viewBox="0 0 450 300" className="relative z-10 h-[220px] w-[92%] drop-shadow-[0_0_35px_rgba(0,213,255,.9)] sm:h-[330px] sm:w-[520px]" aria-hidden="true">
        <path d="M140 195C92 184 72 143 96 102C105 67 140 51 175 65C201 31 250 28 281 61C322 57 353 84 357 122C390 145 382 196 340 207C313 248 251 246 224 207C196 222 161 218 140 195Z" fill="rgba(0,140,255,.08)" stroke="#00D5FF" strokeWidth="3" />
        <g stroke="#008CFF" opacity=".8">
          {Array.from({ length: 54 }).map((_, i) => {
            const x1 = 112 + ((i * 37) % 230);
            const y1 = 70 + ((i * 23) % 130);
            const x2 = 112 + (((i + 8) * 41) % 230);
            const y2 = 70 + (((i + 5) * 19) % 130);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        <g fill="#00D5FF">
          {Array.from({ length: 38 }).map((_, i) => <circle key={i} cx={112 + ((i * 37) % 230)} cy={70 + ((i * 23) % 130)} r="3" />)}
        </g>
      </svg>
      <MiniPanel title="Model Training" className="left-[2%] top-[1%] w-[45%] sm:left-[8%] sm:top-[10%] sm:w-52">
        <ChartLines />
        <span className="flex justify-between">Accuracy<b className="text-cyan">98.7%</b></span>
      </MiniPanel>
      <MiniPanel title="Data Pipeline" className="left-[2%] bottom-[4%] w-[47%] sm:left-[5%] sm:bottom-[22%] sm:w-52">
        Source → Clean → Train → Deploy
        <span className="mt-3 flex items-center gap-2 text-cyan">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan shadow-[0_0_10px_rgba(0,213,255,.9)]" />
          Running
        </span>
      </MiniPanel>
      <MiniPanel title="AI Code" className="right-[2%] top-[1%] w-[52%] sm:right-[8%] sm:top-[12%] sm:w-56">
        <code className="block text-[10px] leading-5 text-cyan sm:text-xs sm:leading-6">
          model = AIEngine()
          <br />model.train(data)
          <br />model.predict(new_data)
        </code>
      </MiniPanel>
      <MiniPanel title="Predictions" className="right-[2%] bottom-[4%] w-[47%] sm:right-[7%] sm:bottom-[24%] sm:w-52">
        <ChartLines />
        <span className="flex justify-between">Result<b className="text-cyan">98.7%</b></span>
      </MiniPanel>
    </HologramStage>
  );
}
