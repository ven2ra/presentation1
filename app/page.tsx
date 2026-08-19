import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { BentoFeatures } from "@/components/landing/BentoFeatures";
import { GalleryShowcase } from "@/components/landing/GalleryShowcase";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-ink focus:bg-lime focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-bold focus:uppercase focus:text-ink"
      >
        Перейти к содержимому
      </a>
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <GalleryShowcase />
        <ResultsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
