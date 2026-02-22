"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function AboutAndGallery() {
  return (
    <section id="o-mne" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#2A4B7C] md:text-3xl">
              O mně
            </h2>
            <p className="text-slate-600 leading-relaxed">
            Věřím, že skutečný pokrok nastává v bodě, kde se potkává disciplína a lidskost. Jako Scrum Master vím, že ty nejlepší výsledky nedoručují procesy, ale lidé, kteří jim rozumí. Moje cesta není jen o agilním řízení – je o hledání win-win řešení v byznysu i v životě. 
            <br />
            <br />
            Mým největším zázemím a motivací je moje rodina, která mě učí trpělivosti a nadhledu. Ať už ladím efektivitu týmu, studuji vliv výživy na náš výkon, nebo objevuji nové možnosti v AI, vždy hledám cestu, jak věci dělat smysluplněji a lépe.
            </p>
          </motion.div>
          <motion.div
  variants={container}
  className="grid grid-cols-2 gap-3 sm:gap-4"
>
  {/* Fotka 1 */}
  <motion.div variants={item} className="aspect-square rounded-xl overflow-hidden border border-slate-200">
    <img src="/beh.jpeg" alt="Jakub při běhu" className="h-full w-full object-cover" />
  </motion.div>

  {/* Fotka 2 */}
  <motion.div variants={item} className="aspect-square rounded-xl overflow-hidden border border-slate-200">
    <img src="/rodina.jpeg" alt="Jakub s dcerou" className="h-full w-full object-cover" />
  </motion.div>

  {/* Fotka 3 */}
  <motion.div variants={item} className="aspect-square rounded-xl overflow-hidden border border-slate-200">
    <img src="/hokej.jpg" alt="Jakub jako hokejista" className="h-full w-full object-cover" />
  </motion.div>

  {/* Fotka 4 */}
  <motion.div variants={item} className="aspect-square rounded-xl overflow-hidden border border-slate-200">
    <img src="/chatgpt.png" alt="Prezentující AI Jakub" className="h-full w-full object-cover" />
  </motion.div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}
