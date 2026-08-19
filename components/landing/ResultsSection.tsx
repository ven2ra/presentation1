"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const results = [
  {
    value: 42,
    suffix: "%",
    title: "быстрее обработка обращений",
    description:
      "Единая карточка и автоподстановка данных сокращают время на рутинные действия.",
  },
  {
    value: 3,
    suffix: "×",
    title: "меньше ошибок и потерянных заявок",
    description:
      "Автоматическая фиксация действий исключает ручной перенос данных между системами.",
  },
  {
    value: 100,
    suffix: "%",
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
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-foreground/10 border-y border-foreground/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-6 py-10 text-center sm:px-8"
            >
              <div className="font-mono text-5xl font-semibold tracking-tight text-foreground tabular-nums sm:text-6xl">
                <NumberTicker value={r.value} suffix={r.suffix} />
              </div>
              <p className="mt-4 text-base font-semibold text-foreground">
                {r.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
