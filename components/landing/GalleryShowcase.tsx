"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LayoutDashboard,
  FilePlus2,
  PhoneCall,
  MessageCircle,
  ListTodo,
  FileText,
  History,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";

const screens = [
  {
    icon: Home,
    title: "Главная",
    description: "Общий обзор дня: задачи, обращения и события команды на одном экране.",
  },
  {
    icon: LayoutDashboard,
    title: "Дашборд",
    description: "Загрузка отдела, сроки и динамика обращений в наглядных виджетах.",
  },
  {
    icon: FilePlus2,
    title: "Создание обращения",
    description: "Быстрая форма с автозаполнением данных клиента и категорией запроса.",
  },
  {
    icon: PhoneCall,
    title: "Форма звонка",
    description: "Фиксация звонка с привязкой к обращению и результатом разговора.",
  },
  {
    icon: MessageCircle,
    title: "Форма чата",
    description: "Быстрый старт переписки с шаблонами и историей клиента под рукой.",
  },
  {
    icon: ListTodo,
    title: "Ближайшие",
    description: "Список приоритетных задач и дедлайнов, отсортированных по срочности.",
  },
  {
    icon: FileText,
    title: "Карточка обращения",
    description: "Полный контекст: канал, статус, ответственный и связанные события.",
  },
  {
    icon: History,
    title: "История",
    description: "Хронология всех действий по обращению — от создания до закрытия.",
  },
];

function ScreenMock({
  icon: Icon,
  title,
}: {
  icon: (typeof screens)[number]["icon"];
  title: string;
}) {
  return (
    <div className="flex h-full w-full flex-col rounded-xl bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light shadow-glow">
          <Icon className="h-7 w-7 text-white" aria-hidden />
        </div>
        <div className="h-2 w-32 rounded-full bg-white/15" />
        <div className="h-2 w-20 rounded-full bg-white/10" />
        <span className="mt-2 text-xs font-medium text-white/50">{title}</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-8 rounded-md bg-white/[0.04]" />
        ))}
      </div>
    </div>
  );
}

export function GalleryShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-40" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">
            Интерфейс
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Галерея интерфейса
          </h2>
          <p className="mt-4 text-balance text-white/60">
            От создания обращения до закрытия — каждый экран продуман так,
            чтобы сотрудник тратил меньше кликов и больше времени на клиента.
          </p>
        </div>

        <div ref={containerRef} style={{ perspective: 1200 }}>
          <motion.div
            style={{ rotateX, scale }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {screens.map((screen, i) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={cn(
                  "group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-3 shadow-2xl"
                )}
              >
                <ScreenMock icon={screen.icon} title={screen.title} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
