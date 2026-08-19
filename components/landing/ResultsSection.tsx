"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldAlert, Eye } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const results = [
  {
    icon: Gauge,
    value: 42,
    suffix: "%",
    prefix: "",
    title: "быстрее обработка обращений",
    description:
      "Единая карточка и автоподстановка данных сокращают время на рутинные действия.",
  },
  {
    icon: ShieldAlert,
    value: 3,
    suffix: "×",
    prefix: "",
    title: "меньше ошибок и потерянных заявок",
    description:
      "Автоматическая фиксация действий исключает ручной перенос данных между системами.",
  },
  {
    icon: Eye,
    value: 100,
    suffix: "%",
    prefix: "",
    title: "прозрачность по каждому обращению",
    description:
      "Руководитель и сотрудник видят одну и ту же картину — статус, историю и сроки.",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="relative bg-surface py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-success">
            Результаты внедрения
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Измеримый эффект уже в первые недели
          </h2>
          <p className="mt-4 text-balance text-muted">
            Команды, перешедшие на единую среду, отмечают рост скорости
            работы и снижение числа ошибок без расширения штата.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-foreground/5 bg-white p-8 text-center shadow-card"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  <NumberTicker value={r.value} suffix={r.suffix} prefix={r.prefix} />
                </div>
                <p className="mt-3 text-base font-semibold text-foreground">
                  {r.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-14 max-w-3xl text-balance text-center text-base leading-relaxed text-muted"
        >
          Единая рабочая среда объединяет обращения, звонки и чаты в одном
          месте — сотрудники не теряют время на переключение между
          системами, а руководители получают полную картину работы отдела
          без ручных отчётов.
        </motion.p>
      </div>
    </section>
  );
}
