"use client";

import { motion } from "framer-motion";
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
    description: "Общий обзор дня: задачи, обращения и события команды.",
    tone: "paper" as const,
    rotate: -3,
  },
  {
    icon: LayoutDashboard,
    title: "Дашборд",
    description: "Загрузка отдела, сроки и динамика обращений.",
    tone: "lime" as const,
    rotate: 3,
  },
  {
    icon: FilePlus2,
    title: "Создание обращения",
    description: "Быстрая форма с автозаполнением данных клиента.",
    tone: "paper" as const,
    rotate: 2,
  },
  {
    icon: PhoneCall,
    title: "Форма звонка",
    description: "Фиксация звонка с привязкой к обращению.",
    tone: "coral" as const,
    rotate: -2,
  },
  {
    icon: MessageCircle,
    title: "Форма чата",
    description: "Быстрый старт переписки с шаблонами ответов.",
    tone: "paper" as const,
    rotate: -3,
  },
  {
    icon: ListTodo,
    title: "Ближайшие",
    description: "Приоритетные задачи, отсортированные по срочности.",
    tone: "paper" as const,
    rotate: 3,
  },
  {
    icon: FileText,
    title: "Карточка обращения",
    description: "Канал, статус, ответственный и связанные события.",
    tone: "lime" as const,
    rotate: 2,
  },
  {
    icon: History,
    title: "История",
    description: "Хронология всех действий — от создания до закрытия.",
    tone: "paper" as const,
    rotate: -2,
  },
];

const toneClasses = {
  paper: "bg-paper text-ink",
  lime: "bg-lime text-ink",
  coral: "bg-coral text-paper",
};

export function GalleryShowcase() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F4EEDF 1.4px, transparent 1.4px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="container relative">
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block rotate-1 border-2 border-lime bg-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-lime">
            Интерфейс
          </span>
          <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-paper sm:text-4xl">
            Галерея экранов
          </h2>
          <p className="mt-4 text-balance text-paper/60">
            От создания обращения до закрытия — каждый экран продуман так,
            чтобы сотрудник тратил меньше кликов и больше времени на клиента.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {screens.map((screen, i) => {
            const Icon = screen.icon;
            return (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 30, rotate: screen.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: screen.rotate }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                className={cn(
                  "group relative aspect-[4/5] border-2 border-ink p-3 shadow-brut-lime transition-shadow duration-200 hover:shadow-brut-lg",
                  toneClasses[screen.tone]
                )}
              >
                <div className="flex h-full w-full flex-col justify-between border-2 border-ink/15 p-4">
                  <div className="flex items-center justify-between">
                    <span className="border-2 border-current px-1.5 py-0.5 font-mono text-[10px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold uppercase leading-tight">
                      {screen.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed opacity-70">
                      {screen.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
