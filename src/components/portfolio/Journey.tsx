import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    tag: "Experience",
    title: "Digital Marketing Executive",
    org: "Mediasmiths",
    period: "2025 — 2026",
    desc: "Executing end-to-end digital campaigns — planning and running Meta & Google Ads, managing social media presence, optimizing for lead generation, and communicating results directly with clients to drive engagement and business growth.",
  },
  {
    icon: Award,
    tag: "Certification",
    title: "Advanced Diploma in Digital Marketing",
    org: "Mattered Digital Academy",
    period: "Certified",
    desc: "Comprehensive training across performance marketing, SEO, social media, email automation, and analytics — building a strong, practical foundation for data-driven campaigns.",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    title: "Bachelor of Computer Applications (BCA)",
    org: "Calicut University",
    period: "2021 — 2024",
    desc: "A technical foundation in computing and problem-solving that sharpens my analytical approach to marketing tools, automation, and campaign data.",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    title: "Higher Secondary Education",
    org: "GHSS Pudhuppady",
    period: "2019 — 2021",
    desc: "Completed higher secondary schooling, building the discipline and curiosity that carried into a marketing career.",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    title: "Senior Secondary Education",
    org: "St. Joseph's HSS Kodanchery",
    period: "2018 — 2019",
    desc: "Early schooling foundation that nurtured communication and creative interests.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-4xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
          My journey
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Experience & education.
        </h2>
      </div>

      <div className="relative mt-14 space-y-4 border-l border-zinc-900 pl-8">
        {timeline.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative rounded-xl border border-zinc-900 bg-zinc-950/20 p-6"
          >
            <span className="absolute -left-[41px] top-[30px] flex h-5 w-5 items-center justify-center rounded-full border border-zinc-900 bg-[#09090b]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                <t.icon className="h-3.5 w-3.5 text-zinc-500" /> {t.tag}
              </span>
              <span className="text-xs font-mono text-zinc-500">{t.period}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-zinc-100">{t.title}</h3>
            <p className="text-xs font-mono text-zinc-400 mt-1">{t.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
