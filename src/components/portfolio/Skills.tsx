import { motion } from "framer-motion";

const technical = [
  { name: "Social Media Marketing", level: 95 },
  { name: "Performance Marketing", level: 90 },
  { name: "Email Marketing", level: 85 },
  { name: "WhatsApp Marketing", level: 88 },
  { name: "Affiliate Marketing", level: 80 },
  { name: "Keyword Research", level: 85 },
  { name: "Shopify Websites", level: 82 },
  { name: "Content Marketing", level: 88 },
];

const soft = [
  "Communication",
  "Time Management",
  "Team Work",
  "Problem Solving",
  "Public Speaking",
  "Presentation",
  "Video Editing",
  "Photography",
  "Videography",
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-zinc-900 bg-zinc-950/10 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Technical skills
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">The marketing stack.</h2>
          <div className="mt-10 space-y-6">
            {technical.map((s, i) => (
              <div key={s.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-200">{s.name}</span>
                  <span className="font-mono text-xs text-zinc-500">{s.level}%</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-900">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
                    className="h-full rounded-full bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Soft skills
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Beyond the numbers.</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            The human side of marketing — collaboration, creativity, and clear
            communication that keeps clients and campaigns moving forward.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {soft.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="rounded-lg border border-zinc-900 bg-zinc-950/20 px-4 py-2 text-xs font-mono text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
