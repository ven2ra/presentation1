import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
}

export function Marquee({ items, className, reverse }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("flex overflow-hidden", className)} aria-hidden>
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 pr-8 animate-marquee",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap">{item}</span>
            <span className="h-2 w-2 shrink-0 rotate-45 bg-current" />
          </span>
        ))}
      </div>
    </div>
  );
}
