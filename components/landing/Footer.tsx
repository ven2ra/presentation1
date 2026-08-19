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
    <footer className="border-t-2 border-ink bg-ink pt-16 text-paper/70">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 border-b-2 border-paper/15 pb-14 md:flex-row">
          <div className="max-w-xs">
            <a href="#hero" className="flex items-center gap-3 text-paper">
              <span className="flex h-8 w-8 -rotate-3 items-center justify-center border-2 border-lime bg-ink font-display text-sm font-black text-lime">
                ЕС
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-tight">
                Единая среда
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/50">
              Система управления обращениями, звонками и чатами для сервисных
              команд, которые ценят время клиентов и своё.
            </p>
          </div>

          <nav aria-label="Ссылки футера" className="grid grid-cols-2 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-lime">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link, i) => (
                    <li key={`${col.title}-${i}`}>
                      <a
                        href={link.href}
                        className="text-sm text-paper/60 transition-colors hover:text-paper"
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

        <p
          aria-hidden
          className="select-none py-4 text-center font-display text-[15vw] font-black uppercase leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_#F4EEDF33] sm:text-[8rem]"
        >
          Единая среда
        </p>

        <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-paper/15 py-6 text-xs text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Единая рабочая среда. Все права защищены.</p>
          <p>Сделано для сервисных команд, которые растут.</p>
        </div>
      </div>
    </footer>
  );
}
