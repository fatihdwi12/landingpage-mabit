import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-text-inverse hover:bg-primary-hover border border-primary",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary/5",
  whatsapp:
    "bg-primary text-text-inverse hover:bg-primary-hover border border-primary",
  ghost:
    "bg-transparent text-primary border-b border-transparent hover:border-accent px-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-body-md min-h-[44px]",
  lg: "px-8 py-4 text-body-lg min-h-[52px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-body font-medium transition-colors duration-400",
        variant !== "ghost" && sizeStyles[size],
        variant === "ghost" && "text-body-md py-1",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {variant === "whatsapp" && <MessageCircle size={18} strokeWidth={1.75} />}
      {children}
    </button>
  );
}
