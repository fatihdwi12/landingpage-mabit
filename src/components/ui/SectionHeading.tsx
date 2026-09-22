import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverse?: boolean; // for use on dark/emerald backgrounds
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-label uppercase tracking-widest text-accent font-semibold">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-heading-lg font-heading font-semibold",
          inverse ? "text-text-inverse" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-body-lg max-w-prose",
            inverse ? "text-text-inverse/80" : "text-text/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
