"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-coral py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #141311 1.4px, transparent 1.4px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl border-2 border-ink bg-paper p-8 shadow-brut-lg sm:p-14"
        >
          <h2 className="text-balance text-center font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl">
            Готовы объединить обращения, звонки и чаты?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-center text-ink-soft">
            Оставьте рабочий email — покажем систему на данных, близких к
            вашим процессам, и поможем настроить переход без простоя.
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-2 border-2 border-ink bg-lime px-5 py-3 text-sm font-bold text-ink">
              <CheckCircle2 className="h-5 w-5" aria-hidden />
              Заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Рабочий email
              </label>
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
                  aria-hidden
                />
                <input
                  id="cta-email"
                  type="email"
                  required
                  placeholder="you@company.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full border-2 border-ink bg-paper pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-cobalt"
                />
              </div>
              <Button type="submit" size="default" variant="solid">
                Получить доступ
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </form>
          )}

          <p className="mt-6 text-center text-xs text-ink-soft/70">
            Отправляя заявку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 mt-20 border-y-2 border-ink bg-ink py-3 font-display text-sm font-bold uppercase tracking-widest text-paper">
        <Marquee items={["ЗАПРОСИТЬ ДЕМО", "ПОЛУЧИТЬ ДОСТУП", "БЕЗ ХАОСА"]} />
      </div>
    </section>
  );
}
