"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

const results = [
  {
    value: 42,
    suffix: "%",
    title: "быстрее обработка обращений",
    description:
      "Единая карточка и автоподстановка данных сокращают время на рутинные действия.",
    tone: "paper" as const,
  },
  {
    value: 3,
    suffix: "×",
    title: "меньше ошибок и потерянных заявок",
    description:
      "Автоматическая фиксация действий исключает ручной перенос данных между системами.",
    tone: "coral" as const,
  },
  {
    value: 100,
    suffix: "%",
    title: "прозрачность по каждому обращению",
    description:
      "Руководитель и сотрудник видят одну и ту же картину — статус, историю и сроки.",
    tone: "lime" as const,
  },
];

const toneClasses = {
  paper: "bg-paper text-ink",
  coral: "bg-coral text-paper",
  lime: "bg-lime text-ink",
};

export function ResultsSection() {
  return (
    <section id="results" className="relative bg-paper-2 py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block -rotate-1 border-2 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink">
            Результаты внедрения
          </span>
          <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl">
            Измеримый эффект уже в первые недели
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[2px] border-2 border-ink bg-ink sm:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn("flex flex-col p-8", toneClasses[r.tone])}
            >
              <div className="flex items-baseline font-display text-[3.2rem] font-black leading-none sm:text-6xl">
                <NumberTicker value={r.value} suffix={r.suffix} />
              </div>
              <p className="mt-4 font-display text-base font-bold uppercase leading-snug">
                {r.title}
              </p>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  r.tone === "coral" ? "opacity-75" : "opacity-70"
                )}
              >
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-14 max-w-3xl text-balance text-center font-sans text-base leading-relaxed text-ink-soft"
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
