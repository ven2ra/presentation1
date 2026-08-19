import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "press inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-ink font-display text-sm font-bold uppercase tracking-wide transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 hover:-translate-x-0.5 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        solid: "bg-ink text-paper shadow-brut hover:shadow-brut-lg",
        accent: "bg-lime text-ink shadow-brut hover:shadow-brut-lg",
        coral: "bg-coral text-paper shadow-brut hover:shadow-brut-lg",
        outline:
          "border-paper bg-transparent text-paper shadow-[5px_5px_0_0_#F4EEDF] hover:shadow-[9px_9px_0_0_#F4EEDF]",
        ghost:
          "border-ink bg-paper text-ink shadow-brut hover:shadow-brut-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        lg: "h-14 px-8 py-4 text-base",
        sm: "h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
