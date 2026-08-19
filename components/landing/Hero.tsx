"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { VapourText } from "@/components/ui/vapour-text";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-dark pt-28 pb-24"
    >
      {/* Анимированный градиентный фон */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1440_0%,_#0B0F19_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(120deg,#4F46E5_0%,#7C3AED_35%,#10B981_70%,#4F46E5_100%)] bg-[length:300%_300%] opacity-20 animate-gradient-move"
      />
      <div aria-hidden className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px]" />
      <BackgroundBeams />

      {/* Плавающие сферы-акценты */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[100px] animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-success/20 blur-[120px] animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary-light" aria-hidden />
            Единое рабочее пространство для сервисных команд
          </motion.span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            <VapourText text="Единая рабочая среда для" />
            <br />
            <motion.span
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block bg-gradient-to-r from-primary-light via-fuchsia-400 to-success bg-clip-text text-transparent"
            >
              обращений, звонков и чатов
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-6 max-w-2xl text-balance text-base text-white/60 sm:text-lg"
          >
            Соберите обращения клиентов, входящие звонки и переписки в чатах
            в одном интерфейсе. Меньше переключений между системами — больше
            времени на решение задач клиента, полная история и прозрачная
            аналитика по каждому обращению.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg" variant="primary">
              Запросить демо
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <a
              href="#features"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              <PlayCircle className="h-4 w-4" aria-hidden />
              Посмотреть возможности
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-white/35"
          >
            <span>Обращения</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Звонки</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Чаты</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Дашборды</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>История</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
