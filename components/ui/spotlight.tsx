import { cn } from "@/lib/utils";

export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-dot-grid-dark bg-[size:22px_22px] mask-fade-edges" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/25 blur-[120px]" />
    </div>
  );
}
