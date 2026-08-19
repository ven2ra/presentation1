"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

const tickerItems = [
  "ОБРАЩЕНИЯ",
  "ЗВОНКИ",
  "ЧАТЫ",
  "ДАШБОРДЫ",
  "ИСТОРИЯ",
  "БЕЗ ХАОСА",
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink pt-[68px]">
      {/* Halftone-точки вместо блюр-glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[length:18px_18px] opacity-[0.18]"
        style={{ backgroundImage: "radial-gradient(circle, #F4EEDF 1.4px, transparent 1.4px)" }}
      />
      {/* Плоская фигура — без размытия */}
      <div
        aria-hidden
        className="absolute -right-24 top-16 h-[420px] w-[420px] rotate-12 border-2 border-lime/40 bg-coral/90 sm:h-[520px] sm:w-[520px]"
      />
      <div
        aria-hidden
        className="absolute -left-16 bottom-0 h-64 w-64 -rotate-6 border-2 border-cobalt bg-grape/80"
      />

      <div className="container relative z-10 pb-16 pt-20 sm:pt-28">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-block border-2 border-lime bg-ink px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-lime"
          >
            Единая среда для сервисных команд
          </motion.span>

          <h1 className="text-balance font-display text-[clamp(2.5rem,9vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-paper">
            <Reveal delay={0.1}>Единая рабочая</Reveal>
            <br />
            <Reveal delay={0.25}>среда для</Reveal>{" "}
            <Reveal delay={0.4} className="relative">
              <span className="relative z-10 -rotate-1 bg-lime px-2 text-ink">
                обращений,
              </span>
            </Reveal>
            <br />
            <Reveal delay={0.5} className="relative">
              <span className="relative z-10 rotate-1 bg-coral px-2 text-ink">
                звонков и чатов
              </span>
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 max-w-xl text-balance font-sans text-base leading-relaxed text-paper/70 sm:text-lg"
          >
            Соберите обращения клиентов, входящие звонки и переписки в чатах
            в одном интерфейсе. Меньше переключений между системами — больше
            времени на решение задач клиента, полная история и прозрачная
            аналитика по каждому обращению.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button size="lg" variant="accent">
              Запросить демо
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
            <a
              href="#features"
              className="press inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-paper px-8 font-display text-base font-bold uppercase tracking-wide text-paper shadow-[5px_5px_0_0_#F4EEDF] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#F4EEDF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <PlayCircle className="h-4 w-4" aria-hidden />
              Возможности
            </a>
          </motion.div>
        </div>
      </div>

      {/* Тикер-лента — жёсткая граница сверху и снизу, никаких градиентов */}
      <div className="relative z-10 border-y-2 border-ink bg-lime py-3 font-display text-sm font-bold uppercase tracking-widest text-ink">
        <Marquee items={tickerItems} />
      </div>
    </section>
  );
}
