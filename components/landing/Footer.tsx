import { Headset } from "lucide-react";

const columns = [
  {
    title: "Продукт",
    links: [
      { href: "#features", label: "Возможности" },
      { href: "#gallery", label: "Интерфейс" },
      { href: "#results", label: "Результаты" },
    ],
  },
  {
    title: "Компания",
    links: [
      { href: "#cta", label: "Связаться с нами" },
      { href: "#cta", label: "Запросить демо" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark py-14 text-white/60">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <a href="#hero" className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-light">
                <Headset className="h-4 w-4 text-white" aria-hidden />
              </span>
              <span className="text-sm font-bold">Единая&nbsp;среда</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Система управления обращениями, звонками и чатами для сервисных
              команд, которые ценят время клиентов и своё.
            </p>
          </div>

          <nav
            aria-label="Ссылки футера"
            className="grid grid-cols-2 gap-10 sm:grid-cols-2"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link, i) => (
                    <li key={`${col.title}-${i}`}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Единая рабочая среда. Все права защищены.</p>
          <p>Сделано для сервисных команд, которые растут.</p>
        </div>
      </div>
    </footer>
  );
}
