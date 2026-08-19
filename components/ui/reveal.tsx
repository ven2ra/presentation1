"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/** Жёсткий wipe-реveal вместо посимвольного blur-фейда. */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  return (
    <motion.span
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.65, 0, 0.35, 1] }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}
