"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { VapourText } from "@/components/ui/vapour-text";

const ticketRows = [
  { channel: Ticket, label: "Обращение #4821 · Оплата не прошла", status: "В работе", tone: "primary" },
  { channel: Phone, label: "Звонок · Иванова А.С., 03:12", status: "Завершён", tone: "success" },
  { channel: MessageSquare, label: "Чат · Вопрос по доставке", status: "Ожидает", tone: "muted" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-dark pb-24 pt-36 sm:pb-32 sm:pt-44"
    >
      <Spotlight />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1 text-xs font-medium text-white/50"
          >
            Обращения · Звонки · Чаты — в одном интерфейсе
          </motion.span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-[3.4rem]">
            <VapourText text="Одно окно вместо" delayStart={0.15} />
            <br />
            <VapourText text="пяти вкладок" delayStart={0.5} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Обращения клиентов, звонки и переписки в чатах — в одной карточке,
            с общей историей и без переключения между системами.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Button size="lg" variant="primary">
              Запросить демо
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-base font-semibold text-white transition-colors hover:bg-white/[0.06] hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              Смотреть возможности
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-dark-surface shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="ml-4 flex items-center gap-4 text-xs text-white/40">
                <span className="text-white">Обращения</span>
                <span>Звонки</span>
                <span>Чаты</span>
                <span>Дашборд</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,300px]">
              <div className="space-y-2 p-5">
                {ticketRows.map((row) => {
                  const Icon = row.channel;
                  return (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-white/40" aria-hidden />
                        <span className="text-sm text-white/75">{row.label}</span>
                      </div>
                      <span
                        className={
                          "rounded-full px-2.5 py-0.5 text-[11px] font-medium " +
                          (row.tone === "primary"
                            ? "bg-primary/15 text-primary-light"
                            : row.tone === "success"
                              ? "bg-success/15 text-success"
                              : "bg-white/10 text-white/50")
                        }
                      >
                        {row.status}
                      </span>
                    </div>
                  );
                })}
                <div className="h-8 rounded-lg border border-dashed border-white/10" />
              </div>
              <div className="border-t border-white/10 p-5 sm:border-l sm:border-t-0">
                <p className="text-xs font-medium uppercase tracking-wide text-white/35">
                  История обращения
                </p>
                <div className="mt-3 space-y-3">
                  {[0.9, 0.7, 0.55].map((w, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="h-1.5 rounded-full bg-white/10" style={{ width: `${w * 100}%` }} />
                      <div className="h-1.5 w-1/3 rounded-full bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
