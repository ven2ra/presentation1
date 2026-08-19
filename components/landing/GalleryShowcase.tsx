"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-white/10 bg-dark p-3">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden">{children}</div>
    </div>
  );
}

function Bar({ w, tone = "bg-white/10" }: { w: string; tone?: string }) {
  return <div className={cn("h-1.5 rounded-full", tone)} style={{ width: w }} />;
}

const screens = [
  {
    title: "Главная",
    description: "Обзор дня: задачи, обращения и события команды на одном экране.",
    mock: (
      <Chrome>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md bg-white/[0.04] p-2">
              <Bar w="60%" />
              <div className="mt-2 h-6 rounded bg-white/[0.05]" />
            </div>
          ))}
        </div>
        <div className="mt-1 space-y-1.5 rounded-md bg-white/[0.03] p-2">
          <Bar w="80%" />
          <Bar w="55%" tone="bg-white/5" />
        </div>
      </Chrome>
    ),
  },
  {
    title: "Дашборд",
    description: "Загрузка отдела, сроки и динамика обращений в наглядных виджетах.",
    mock: (
      <Chrome>
        <div className="flex flex-1 items-end gap-1.5 px-1">
          {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </Chrome>
    ),
  },
  {
    title: "Создание обращения",
    description: "Форма с автозаполнением данных клиента и категорией запроса.",
    mock: (
      <Chrome>
        <div className="space-y-2 rounded-md border border-white/10 p-2.5">
          <Bar w="35%" tone="bg-white/15" />
          <div className="h-6 rounded bg-white/[0.04]" />
          <Bar w="35%" tone="bg-white/15" />
          <div className="h-6 rounded bg-white/[0.04]" />
          <div className="mt-2 h-6 w-16 rounded bg-primary/50" />
        </div>
      </Chrome>
    ),
  },
  {
    title: "Форма звонка",
    description: "Фиксация звонка с привязкой к обращению и результатом разговора.",
    mock: (
      <Chrome>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="h-10 w-10 rounded-full border border-success/40 bg-success/10" />
          <Bar w="70px" tone="bg-white/15" />
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[9px] font-medium text-success">
            00:03:12
          </span>
        </div>
      </Chrome>
    ),
  },
  {
    title: "Форма чата",
    description: "Быстрый старт переписки с шаблонами и историей клиента под рукой.",
    mock: (
      <Chrome>
        <div className="flex flex-1 flex-col justify-end gap-1.5">
          <div className="ml-auto w-2/3 rounded-lg rounded-br-sm bg-primary/30 p-2">
            <Bar w="90%" tone="bg-white/25" />
          </div>
          <div className="w-2/3 rounded-lg rounded-bl-sm bg-white/[0.05] p-2">
            <Bar w="70%" />
          </div>
        </div>
      </Chrome>
    ),
  },
  {
    title: "Ближайшие",
    description: "Список приоритетных задач, отсортированных по срочности.",
    mock: (
      <Chrome>
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-md bg-white/[0.03] p-2">
              <span className={cn("h-3 w-3 rounded-full border", i === 0 ? "border-success bg-success/20" : "border-white/15")} />
              <Bar w={`${70 - i * 15}%`} />
            </div>
          ))}
        </div>
      </Chrome>
    ),
  },
  {
    title: "Карточка обращения",
    description: "Полный контекст: канал, статус, ответственный и связанные события.",
    mock: (
      <Chrome>
        <div className="flex items-center justify-between">
          <Bar w="45%" tone="bg-white/15" />
          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[9px] text-primary-light">
            В работе
          </span>
        </div>
        <div className="mt-1 flex-1 space-y-1.5 rounded-md bg-white/[0.03] p-2">
          <Bar w="85%" />
          <Bar w="65%" tone="bg-white/5" />
          <Bar w="40%" tone="bg-white/5" />
        </div>
      </Chrome>
    ),
  },
  {
    title: "История",
    description: "Хронология всех действий по обращению — от создания до закрытия.",
    mock: (
      <Chrome>
        <div className="ml-1 space-y-3 border-l border-white/10 pl-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[15px] top-0.5 h-1.5 w-1.5 rounded-full bg-white/25" />
              <Bar w={`${60 - i * 10}%`} />
            </div>
          ))}
        </div>
      </Chrome>
    ),
  },
];

export function GalleryShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid-dark bg-[size:22px_22px] mask-fade-edges opacity-60" />

      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">
            Интерфейс
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Галерея интерфейса
          </h2>
          <p className="mt-4 text-balance text-white/55">
            От создания обращения до закрытия — каждый экран продуман так,
            чтобы сотрудник тратил меньше кликов и больше времени на клиента.
          </p>
        </div>

        <div ref={containerRef} className="relative" style={{ perspective: 1200 }}>
          <motion.div
            style={{ rotateX, scale }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {screens.map((screen, i) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-3"
              >
                <div className="h-full w-full transition-opacity duration-300 group-hover:opacity-30">
                  {screen.mock}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/95 to-transparent p-4 pt-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{screen.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    {screen.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
