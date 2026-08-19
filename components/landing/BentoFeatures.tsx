"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageSquareText,
  History,
  LayoutDashboard,
  Bell,
  ShieldCheck,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Card({
  className,
  custom,
  children,
}: {
  className?: string;
  custom: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      custom={custom}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-foreground/[0.08] bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-foreground/[0.16] hover:shadow-card",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13rem]">
          <Card custom={0} className="lg:col-span-2 lg:row-span-2">
            <h3 className="text-lg font-semibold text-foreground">
              Единая карточка обращения
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Все данные по клиенту, каналу и статусу собраны в одной
              карточке — не нужно искать контекст в разных системах.
            </p>
            <div className="mt-5 space-y-2">
              {[
                { label: "Оплата не прошла · чат", tone: "bg-primary" },
                { label: "Звонок · 03:12", tone: "bg-success" },
                { label: "Возврат средств · тикет", tone: "bg-foreground/20" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-2.5 rounded-lg border border-foreground/[0.06] bg-surface px-3 py-2"
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", row.tone)} />
                  <span className="text-xs text-muted">{row.label}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card custom={1}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PhoneCall className="h-4 w-4" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Звонки в общем потоке
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Входящие и исходящие звонки фиксируются рядом с обращениями, с
              записью и привязкой к клиенту.
            </p>
          </Card>

          <Card custom={2}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageSquareText className="h-4 w-4" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Чаты без переключений
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Переписки из всех каналов приходят в один инбокс, с шаблонами
              ответов и статусами прочтения.
            </p>
          </Card>

          <Card custom={3} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Блок «Ближайшие»
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  Приоритетные задачи и дедлайны всегда на виду — сотрудник
                  видит, что делать в первую очередь.
                </p>
              </div>
              <div className="w-full shrink-0 space-y-1.5 sm:w-40">
                {["Ответить клиенту", "Согласовать возврат", "Перезвонить"].map(
                  (task, i) => (
                    <div key={task} className="flex items-center gap-2 text-xs text-muted">
                      <span
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-full border",
                          i === 0
                            ? "border-success bg-success/10 text-success"
                            : "border-foreground/15"
                        )}
                      >
                        {i === 0 && <Check className="h-2.5 w-2.5" />}
                      </span>
                      {task}
                    </div>
                  )
                )}
              </div>
            </div>
          </Card>

          <Card custom={4}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground">
              <History className="h-4 w-4" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Полная история
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Каждое обращение хранит хронологию действий — удобно для
              передачи дел и разбора спорных ситуаций.
            </p>
          </Card>

          <Card custom={5}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground">
              <LayoutDashboard className="h-4 w-4" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Наглядный дашборд
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Руководитель видит нагрузку команды и узкие места в реальном
              времени, без ручных отчётов.
            </p>
          </Card>

          <Card custom={6}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground">
              <Bell className="h-4 w-4" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Умные уведомления
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Система напоминает о просроченных задачах — ничего не теряется
              в потоке обращений.
            </p>
          </Card>

          <Card custom={7}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground">
              <ShieldCheck className="h-4 w-4" aria-hidden />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Прозрачность и контроль
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Каждое действие фиксируется автоматически, что снижает число
              ошибок и упрощает контроль качества.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
