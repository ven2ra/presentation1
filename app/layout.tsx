import type { Metadata } from "next";
import { Unbounded, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html
      lang="ru"
      className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased selection:bg-lime selection:text-ink">
        {children}
      </body>
    </html>
  );
}
