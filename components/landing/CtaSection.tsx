"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid-dark bg-[size:22px_22px] mask-fade-edges opacity-50" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-center gap-10 border-t border-white/10 pt-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Готовы объединить обращения, звонки и чаты?
            </h2>
            <p className="mt-4 text-balance text-white/55">
              Оставьте рабочий email — покажем систему на данных, близких к
              вашим процессам, и поможем настроить переход без простоя.
            </p>
          </div>

          <div className="w-full max-w-sm shrink-0">
            {submitted ? (
              <div className="flex items-center gap-2 rounded-lg border border-success/25 bg-success/10 px-4 py-3 text-sm font-medium text-success">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                Заявка отправлена. Мы свяжемся с вами в ближайшее время.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="cta-email" className="sr-only">
                  Рабочий email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  placeholder="you@company.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <Button type="submit" variant="primary" className="w-full">
                  Получить доступ
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/35">
              Отправляя заявку, вы соглашаетесь с обработкой персональных данных.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
