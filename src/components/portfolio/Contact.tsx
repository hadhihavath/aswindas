import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "kvdasaswin@gmail.com",
    href: "mailto:kvdasaswin@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 62384 08083",
    href: "tel:+916238408083",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Adivaram, Kozhikode, Kerala 673586",
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 p-10 text-center md:p-16"
      >
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
          Let's work together
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Ready to grow your brand? Let's make it happen.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
          Whether you need paid ads that convert, a social presence that stands out, or a
          full-funnel strategy — I'd love to hear about your project.
        </p>

        <a
          href="mailto:kvdasaswin@gmail.com"
          className="mt-8 inline-flex rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-zinc-200"
        >
          Start a conversation
        </a>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {contacts.map((c) => {
            const inner = (
              <>
                <c.icon className="mx-auto h-5 w-5 text-zinc-400" />
                <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  {c.label}
                </div>
                <div className="mt-1.5 text-sm font-medium text-zinc-200">{c.value}</div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="rounded-xl border border-zinc-900 bg-zinc-950/30 p-6 transition-colors hover:border-zinc-800"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="rounded-xl border border-zinc-900 bg-zinc-950/30 p-6"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </motion.div>

      <footer className="mt-16 border-t border-zinc-900 pt-8 text-center text-xs font-mono text-zinc-500">
        © {new Date().getFullYear()} Aswin Das · Digital Marketer · Kozhikode, Kerala
      </footer>
    </section>
  );
}
