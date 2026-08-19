"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VapourTextProps {
  text: string;
  className?: string;
  delayStart?: number;
}

export function VapourText({ text, className, delayStart = 0 }: VapourTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: delayStart + (wi * 6 + ci) * 0.02,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {" "}
        </span>
      ))}
    </span>
  );
}
