import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-primary-light text-white shadow-[0_8px_30px_-8px_rgba(79,70,229,0.6)] hover:shadow-[0_12px_40px_-6px_rgba(124,58,237,0.7)] hover:-translate-y-0.5",
        outline:
          "border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5",
        ghost:
          "border border-foreground/10 text-foreground bg-white hover:bg-foreground/5 hover:-translate-y-0.5",
        light:
          "bg-white text-foreground border border-foreground/10 hover:bg-foreground/5 hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 py-3",
        lg: "h-14 px-8 py-4 text-base",
        sm: "h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
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
