import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://unified-desk.example"),
  title: {
    default: "Единая рабочая среда для обращений, звонков и чатов",
    template: "%s — Единая рабочая среда",
  },
  description:
    "Система управления обращениями, звонками и чатами: одно окно для всей коммуникации с клиентами, автоматизация рутины и полная прозрачность работы отдела с первого дня.",
  keywords: [
    "система управления обращениями",
    "CRM для поддержки",
    "управление звонками",
    "омниканальные чаты",
    "service desk",
    "helpdesk",
  ],
  openGraph: {
    title: "Единая рабочая среда для обращений, звонков и чатов",
    description:
      "Одно окно для обращений, звонков и чатов. Автоматизация, прозрачность и скорость работы отдела с первого дня.",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased font-sans selection:bg-primary-light selection:text-white">
        {children}
      </body>
    </html>
  );
}
