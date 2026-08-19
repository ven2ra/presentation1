import { cn } from "@/lib/utils";

interface StreamImage {
  src: string;
  alt: string;
}

interface ImageStreamHeroProps {
  images: StreamImage[];
  /** Количество вертикальных колонок карточек. */
  cards?: number;
  /** Длительность одного цикла прокрутки колонки, сек. */
  speed?: number;
  /** Угол наклона стены карточек по оси X (3D-перспектива), градусы. */
  axis?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ImageStreamHero({
  images,
  cards = 6,
  speed = 20,
  axis = 20,
  className,
  children,
}: ImageStreamHeroProps) {
  const columns = Array.from({ length: cards }, (_, colIndex) => {
    const offset = colIndex % images.length;
    const ordered = [...images.slice(offset), ...images.slice(0, offset)];
    return { items: [...ordered, ...ordered], reverse: colIndex % 2 === 1 };
  });

  return (
    <div className={cn("relative isolate overflow-hidden bg-ink", className)}>
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "900px" }}
      >
        <div
          className="flex gap-3"
          style={{ transform: `rotateX(${axis}deg) rotateZ(-6deg) scale(1.25)` }}
        >
          {columns.map((col, i) => (
            <div
              key={i}
              className="flex w-[150px] shrink-0 flex-col gap-3"
              style={{
                animation: `stream-y ${speed}s linear infinite`,
                animationDirection: col.reverse ? "reverse" : "normal",
              }}
            >
              {col.items.map((img, j) => (
                <div
                  key={j}
                  className="aspect-[4/5] w-full shrink-0 overflow-hidden border-2 border-ink shadow-brut-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Плоский тёмный scrim для читаемости — без блюра и градиентов */}
      <div aria-hidden className="absolute inset-0 bg-ink/65" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F4EEDF 1.4px, transparent 1.4px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
