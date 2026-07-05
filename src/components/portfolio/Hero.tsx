import { motion } from "framer-motion";
import portrait from "@/assets/aswin-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "8+", label: "Channels Mastered" },
  { value: "Meta & Google", label: "Certified Campaigns" },
  { value: "24/7", label: "Data Optimization" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 filter grayscale"
      />
      <div className="bg-hero-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Available for new projects
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Digital marketing that <span className="text-gradient">drives growth</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            I'm <strong className="font-semibold text-zinc-100">Aswin Das</strong>, a results-driven
            digital marketer turning ad spend into revenue through Meta & Google Ads,
            social media, and conversion-focused campaigns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-zinc-200"
            >
              View my services
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-zinc-800 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-zinc-900"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-900 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="animate-float relative">
            <img
              src={portrait}
              alt="Aswin Das, digital marketer"
              width={1024}
              height={1280}
              className="relative rounded-2xl border border-zinc-800 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
