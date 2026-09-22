import { cn } from "@/lib/utils";

interface MapEmbedProps {
  address: string;
  className?: string;
  zoom?: number;
}

/**
 * Google Maps embed using the legacy no-API-key iframe endpoint.
 * Suitable for MVP — avoids Google Cloud setup / API key / billing.
 * Uses native `loading="lazy"` so it does not block initial page render
 * or affect Lighthouse performance score.
 *
 * If migrating to the official Maps Embed API later (for custom styling,
 * markers, or higher reliability), swap the `src` to:
 *   https://www.google.com/maps/embed/v1/place?key=API_KEY&q=ADDRESS
 */
export default function MapEmbed({
  address,
  className,
  zoom = 15,
}: MapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const src = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-border/20",
        className,
      )}>
      <iframe
        src={src}
        width="100%"
        height="220"
        style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Lokasi: ${address}`}
        aria-label={`Peta lokasi ${address}`}
        className="block"
      />
    </div>
  );
}
