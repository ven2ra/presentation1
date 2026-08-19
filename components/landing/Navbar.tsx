"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Возможности" },
  { href: "#gallery", label: "Интерфейс" },
  { href: "#results", label: "Результаты" },
  { href: "#cta", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b-2 border-ink transition-colors duration-200",
        scrolled ? "bg-paper" : "bg-paper/95"
      )}
    >
      <nav aria-label="Основная навигация" className="container flex h-[68px] items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-9 w-9 rotate-3 items-center justify-center border-2 border-ink bg-lime font-display text-base font-black text-ink">
            ЕС
          </span>
          <span className="font-display text-base font-bold uppercase tracking-tight text-ink">
            Единая среда
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs font-medium uppercase tracking-widest text-ink-soft transition-colors hover:text-coral"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button size="sm" variant="accent">
            Запросить демо
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className="border-2 border-ink bg-paper p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t-2 border-ink bg-paper md:hidden"
        >
          <ul className="container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm font-medium uppercase tracking-widest text-ink hover:text-coral"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button size="sm" variant="accent" className="w-full">
                Запросить демо
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
