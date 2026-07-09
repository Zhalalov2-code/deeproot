"use client";

import { Activity, Clock3, Server } from "lucide-react";
import { motion } from "framer-motion";
import { HamburgSkyline } from "@/components/HamburgSkyline";
import { HudCard } from "@/components/HudCard";
import { ChartLines } from "@/components/ServiceVisuals/SharedVisual";

function DotMap() {
  return (
    <svg viewBox="0 0 210 90" className="h-20 w-full" aria-hidden="true">
      <g fill="#00D5FF">
        {Array.from({ length: 130 }).map((_, index) => {
          const x = 6 + ((index * 37) % 198);
          const y = 8 + ((index * 23) % 74);
          return <circle key={index} cx={x} cy={y} r="1.1" opacity={0.2 + ((index * 13) % 55) / 100} />;
        })}
        <circle cx="58" cy="30" r="2.6" opacity=".95" />
        <circle cx="104" cy="24" r="2.6" opacity=".95" />
        <circle cx="152" cy="44" r="2.6" opacity=".95" />
      </g>
      <g stroke="#00D5FF" strokeWidth=".8" opacity=".5" fill="none">
        <path d="M58 30Q80 8 104 24" />
        <path d="M104 24Q130 26 152 44" />
      </g>
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[48%] top-[18%] h-72 w-72 rounded-full border border-cyan/15 bg-[radial-gradient(circle,rgba(0,213,255,.18),transparent_63%)] blur-[1px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-60" aria-hidden="true">
        <defs>
          <linearGradient id="heroLine" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#00D5FF" stopOpacity="0" />
            <stop offset=".45" stopColor="#00D5FF" stopOpacity=".75" />
            <stop offset="1" stopColor="#008CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M510 210 C650 125 780 150 925 96"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M480 520 C680 415 875 455 1120 365"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="1.5"
          strokeDasharray="6 14"
          animate={{ strokeDashoffset: [0, -160] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <HamburgSkyline />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[7%] left-[4%] hidden w-64 xl:block"
      >
        <HudCard title="System Status">
          <div className="mt-4">
            <ChartLines />
          </div>
          <p className="mt-3 text-sm text-slate-300">Performance</p>
          <p className="mt-1 text-3xl font-semibold text-cyan drop-shadow-[0_0_18px_rgba(0,213,255,.65)]">98.7%</p>
        </HudCard>
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[7%] right-[3%] hidden w-72 xl:block"
      >
        <HudCard title="Hamburg Network">
          <div className="mt-4">
            <DotMap />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-cyan/15 pt-4 text-xs text-slate-300">
            <span className="flex flex-col gap-1">
              <Clock3 className="h-4 w-4 text-cyan" />
              <b className="text-sm text-cyan">24/7</b>Monitoring
            </span>
            <span className="flex flex-col gap-1">
              <Activity className="h-4 w-4 text-cyan" />
              <b className="text-sm text-cyan">99.9%</b>Uptime
            </span>
            <span className="flex flex-col gap-1">
              <Server className="h-4 w-4 text-cyan" />
              <b className="text-sm text-cyan">12</b>Data Centers
            </span>
          </div>
        </HudCard>
      </motion.div>
    </div>
  );
}
