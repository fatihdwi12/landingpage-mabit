import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-accent-muted px-3 py-1 text-label uppercase tracking-widest text-accent font-semibold",
        className
      )}
    >
      {children}
    </span>
  );
}
