import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const languages = ["English", "Malayalam", "Hindi"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 md:grid-cols-[1fr_1.3fr]">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            About me
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Marketing with intent, measured by results.
          </h2>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-6 text-base leading-relaxed text-zinc-400"
        >
          <p>
            I'm a digital marketer based in Kozhikode, Kerala, with hands-on experience
            across social media management, Meta Ads, Google Ads, campaign optimization,
            and lead generation. I help brands turn attention into measurable business
            outcomes — more qualified leads, higher engagement, and stronger conversions.
          </p>
          <p>
            My approach blends creative content with rigorous performance marketing: I
            plan campaigns around clear goals, launch and A/B test ad creatives, watch the
            data daily, and reallocate budget toward what actually works. From building the
            funnel to nurturing leads over email and WhatsApp, I own the full journey from
            first click to conversion.
          </p>
          <p>
            Beyond the dashboards, I bring a maker's eye — video editing, photography, and
            videography — so campaigns look as good as they perform. I hold an Advanced
            Diploma in Digital Marketing and a BCA from Calicut University.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Languages:</span>
            {languages.map((l) => (
              <span
                key={l}
                className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-xs font-mono text-zinc-300"
              >
                {l}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
