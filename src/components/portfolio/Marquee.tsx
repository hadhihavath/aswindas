const items = [
  "Social Media Marketing",
  "Meta Ads",
  "Google Ads",
  "Lead Generation",
  "Email Marketing",
  "WhatsApp Marketing",
  "Affiliate Marketing",
  "Shopify",
  "Content Marketing",
  "Keyword Research",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-zinc-900 bg-zinc-950/20 py-4">
      <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap pr-12">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
          </span>
        ))}
      </div>
    </div>
  );
}
