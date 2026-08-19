"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const paths = [
  "M-200 100C-100 200 200 -50 400 50S900 300 1100 150",
  "M-200 250C0 100 300 400 500 250S1000 50 1200 300",
  "M-200 400C50 300 350 550 550 400S950 200 1200 450",
  "M-200 -50C100 50 250 -150 500 -50S900 150 1200 -20",
];

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute left-1/2 top-0 h-[140%] w-[160%] -translate-x-1/2 opacity-40"
        viewBox="0 0 1000 600"
        fill="none"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#beam-gradient)"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
