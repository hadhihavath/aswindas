import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  Mail,
  MessageCircle,
  Handshake,
  Search,
  ShoppingBag,
  PenLine,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "End-to-end management of Instagram, Facebook, and more — content calendars, community engagement, and growth strategies that build loyal audiences.",
  },
  {
    icon: Target,
    title: "Performance & Paid Ads",
    desc: "High-ROI Meta Ads and Google Ads campaigns with continuous A/B testing, audience targeting, and budget optimization for maximum conversions.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Automated sequences and broadcast campaigns that nurture leads, recover carts, and turn subscribers into repeat customers.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing",
    desc: "Direct, high-open-rate messaging funnels for promotions, follow-ups, and customer support at scale.",
  },
  {
    icon: Handshake,
    title: "Affiliate Marketing",
    desc: "Building and managing partner programs that expand reach and drive sales through trusted, performance-based collaborations.",
  },
  {
    icon: Search,
    title: "Keyword Research & SEO",
    desc: "Data-backed keyword strategy and on-page optimization to capture high-intent search traffic and improve organic visibility.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Websites",
    desc: "Conversion-optimized online stores — setup, design, and marketing integrations that turn browsers into buyers.",
  },
  {
    icon: PenLine,
    title: "Content Marketing",
    desc: "Compelling written and visual content, backed by video editing and photography, that tells your brand story and drives engagement.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
          What I do
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Full-funnel marketing services.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          A complete toolkit to attract, engage, and convert — tailored to your goals and
          driven by data at every step.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="group rounded-xl border border-zinc-900 bg-zinc-950/20 p-6 transition-colors hover:border-zinc-800"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-850 text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-white">
              <s.icon className="h-5 w-5 animate-none" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-zinc-100">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
