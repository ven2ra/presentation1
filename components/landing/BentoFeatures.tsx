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
  span?: string;
  accent?: "primary" | "success";
}

const features: Feature[] = [
  {
    icon: Inbox,
    title: "Единая карточка обращения",
    description:
      "Все данные по клиенту, каналу и статусу собраны в одной карточке — не нужно искать контекст в разных системах.",
    span: "md:col-span-2",
    accent: "primary",
  },
  {
    icon: PhoneCall,
    title: "Звонки в общем потоке",
    description:
      "Входящие и исходящие звонки фиксируются рядом с обращениями и чатами, с записью и привязкой к клиенту.",
    accent: "success",
  },
  {
    icon: MessageSquareText,
    title: "Чаты без переключений",
    description:
      "Переписки из всех каналов приходят в один инбокс, с быстрыми шаблонами ответов и статусами прочтения.",
    accent: "primary",
  },
  {
    icon: ListChecks,
    title: "Блок «Ближайшие»",
    description:
      "Приоритетные задачи и дедлайны всегда на виду — сотрудник видит, что делать в первую очередь.",
    accent: "success",
  },
  {
    icon: History,
    title: "Полная история взаимодействий",
    description:
      "Каждое обращение хранит хронологию: кто, когда и что делал — удобно для передачи дел и разбора спорных ситуаций.",
    span: "md:col-span-2",
    accent: "primary",
  },
  {
    icon: LayoutDashboard,
    title: "Наглядный дашборд",
    description:
      "Руководитель видит нагрузку команды, сроки и узкие места в реальном времени, без ручных отчётов.",
    accent: "success",
  },
  {
    icon: Bell,
    title: "Умные уведомления",
    description:
      "Система напоминает о просроченных задачах и новых сообщениях — ничего не теряется в потоке обращений.",
    accent: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Прозрачность и контроль",
    description:
      "Каждое действие фиксируется автоматически, что снижает число ошибок и упрощает контроль качества работы.",
    accent: "success",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function BentoFeatures() {
  return (
    <section id="features" className="relative bg-surface py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            С первого дня
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Что получает отдел уже с первого дня
          </h2>
          <p className="mt-4 text-balance text-muted">
            Не отдельные модули, а единая среда: обращения, звонки, чаты и
            аналитика работают вместе и не требуют ручной синхронизации.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-foreground/5 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover",
                  feature.span
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-30",
                    feature.accent === "success" ? "bg-success" : "bg-primary"
                  )}
                />
                <div
                  className={cn(
                    "relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
                    feature.accent === "success"
                      ? "bg-success/10 text-success"
                      : "bg-primary/10 text-primary"
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="relative text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
