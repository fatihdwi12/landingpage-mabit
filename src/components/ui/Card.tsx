import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export default function Card({ children, className, hoverLift = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface p-6 md:p-8",
        hoverLift &&
          "transition-all duration-400 hover:-translate-y-1 hover:shadow-lift",
        className
      )}
    >
      {children}
    </div>
  );
}
