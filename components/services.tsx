"use client";

import { motion } from "framer-motion";
import { Users, Heart, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Agilní koučink & Scrum",
    icon: Users,
    description:
      "Buduji prostředí, kde týmy přebírají zodpovědnost a doručují skutečnou hodnotu. Zaměřuji se na efektivní facilitaci, odstraňování bariér a nastavení procesů, které lidem neházejí klacky pod nohy."
  },
  {
    title: "Výživa & Zdravý životní styl",
    icon: Heart,
    description:
      "Věřím, že tělo je hardware pro naši mysl. Zabývám se tím jak optimalizovat energii skrze vyváženou stravu a udržitelné návyky, protože špičkový pracovní výkon začíná u toho, jak se cítíme ve svém vlastním těle."
  },
  {
    title: "Osobnostní rozvoj",
    icon: Lightbulb,
    description:
      "Zajímá mě rozvoj v oblasti leadershipu, pozitivního mindsetu, zdraví, moderních technologií (AI), investic a dalších oblastech. Neustále hledám cesty, jak růst – ať už skrze odbornou literaturu, podcasty nebo budování nových byznysových příležitostí a vztahů."
  }
];

export function Services() {
  return (
    <section id="sluzby" className="border-t border-slate-100 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.h2
          className="mb-12 text-center text-2xl font-semibold tracking-tight text-[#2A4B7C] md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Oblasti zájmu
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className="card-mint-glow group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2A4B7C] text-white transition-colors group-hover:bg-[#7FE0C2] group-hover:text-slate-900">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
