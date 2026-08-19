"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#241a4d_0%,_#0B0F19_60%)]"
      />
      <BackgroundBeams className="opacity-60" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm sm:p-14"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Готовы объединить обращения, звонки и чаты?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-white/60">
            Оставьте рабочий email — покажем систему на данных, близких к
            вашим процессам, и поможем настроить переход без простоя.
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-2 rounded-full border border-success/30 bg-success/10 px-5 py-3 text-sm font-medium text-success">
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
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                  aria-hidden
                />
                <input
                  id="cta-email"
                  type="email"
                  required
                  placeholder="you@company.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-full border border-white/15 bg-white/5 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/40"
                />
              </div>
              <Button type="submit" size="default" variant="primary">
                Получить доступ
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </form>
          )}

          <p className="mt-6 text-xs text-white/35">
            Отправляя заявку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
