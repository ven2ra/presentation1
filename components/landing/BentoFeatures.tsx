"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  PhoneCall,
  MessageSquareText,
  ListChecks,
  History,
  LayoutDashboard,
  Bell,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "paper" | "ink" | "lime" | "coral";
}

const features: Feature[] = [
  {
    icon: Inbox,
    title: "Единая карточка обращения",
    description:
      "Все данные по клиенту, каналу и статусу собраны в одной карточке — не нужно искать контекст в разных системах.",
    tone: "ink",
  },
  {
    icon: PhoneCall,
    title: "Звонки в общем потоке",
    description:
      "Входящие и исходящие звонки фиксируются рядом с обращениями и чатами, с записью и привязкой к клиенту.",
    tone: "paper",
  },
  {
    icon: MessageSquareText,
    title: "Чаты без переключений",
    description:
      "Переписки из всех каналов приходят в один инбокс, с быстрыми шаблонами ответов и статусами прочтения.",
    tone: "paper",
  },
  {
    icon: ListChecks,
    title: "Блок «Ближайшие»",
    description:
      "Приоритетные задачи и дедлайны всегда на виду — сотрудник видит, что делать в первую очередь.",
    tone: "lime",
  },
  {
    icon: History,
    title: "Полная история взаимодействий",
    description:
      "Каждое обращение хранит хронологию: кто, когда и что делал — удобно для передачи дел и разбора спорных ситуаций.",
    tone: "paper",
  },
  {
    icon: LayoutDashboard,
    title: "Наглядный дашборд",
    description:
      "Руководитель видит нагрузку команды, сроки и узкие места в реальном времени, без ручных отчётов.",
    tone: "coral",
  },
  {
    icon: Bell,
    title: "Умные уведомления",
    description:
      "Система напоминает о просроченных задачах и новых сообщениях — ничего не теряется в потоке обращений.",
    tone: "paper",
  },
  {
    icon: ShieldCheck,
    title: "Прозрачность и контроль",
    description:
      "Каждое действие фиксируется автоматически, что снижает число ошибок и упрощает контроль качества работы.",
    tone: "ink",
  },
];

const toneClasses: Record<Feature["tone"], string> = {
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
  lime: "bg-lime text-ink",
  coral: "bg-coral text-paper",
};

const numberToneClasses: Record<Feature["tone"], string> = {
  paper: "text-ink/15",
  ink: "text-paper/20",
  lime: "text-ink/20",
  coral: "text-paper/25",
};

export function BentoFeatures() {
  return (
    <section id="features" className="relative bg-paper-2 py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="mb-3 inline-block -rotate-1 border-2 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink">
              С первого дня
            </span>
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl">
              Что получает отдел
            </h2>
          </div>
          <p className="max-w-sm text-balance font-sans text-sm leading-relaxed text-ink-soft">
            Не отдельные модули, а единая среда: обращения, звонки, чаты и
            аналитика работают вместе и не требуют ручной синхронизации.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[2px] border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className={cn(
                  "group relative flex min-h-[220px] flex-col justify-between p-6 transition-colors",
                  toneClasses[feature.tone]
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute right-3 top-2 select-none font-display text-6xl font-black",
                    numberToneClasses[feature.tone]
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={cn(
                    "relative mb-5 flex h-11 w-11 items-center justify-center border-2",
                    feature.tone === "ink" || feature.tone === "coral"
                      ? "border-paper"
                      : "border-ink"
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="relative">
                  <h3 className="font-display text-base font-bold uppercase leading-snug">
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      feature.tone === "ink" || feature.tone === "coral"
                        ? "opacity-75"
                        : "text-ink-soft"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
