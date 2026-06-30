import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionBlueprintAccent from "../components/SectionBlueprintAccent";
import { services, serviceShowcase } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="section-space relative overflow-hidden bg-ivory">
      <SectionBlueprintAccent
        reverse
        className="-right-16 top-24 hidden h-72 w-72 lg:block"
      />
      <SectionBlueprintAccent className="-bottom-20 -left-24 hidden h-80 w-80 opacity-60 lg:block" />

      <div className="container-shell relative z-10">
        <div className="grid gap-6 md:grid-cols-[1fr_0.45fr] md:items-end md:gap-12">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Design expertise,
                <span className="block italic text-stone">from idea to detail.</span>
              </>
            }
          />
          <Reveal delay={0.12} className="max-w-sm text-sm leading-6 text-stone md:justify-self-end md:pb-2">
            One studio for architecture, interiors, visualisation, and planning—
            composed into one clear vision.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-18">
          {serviceShowcase.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="group relative aspect-[4/3] overflow-hidden bg-ink"
            >
              <img
                src={item.image}
                alt={`${item.title} by The Heera Architects`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <h3 className="font-display text-3xl text-white">{item.title}</h3>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                  0{index + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid border-l border-t border-line md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 4) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-[280px] flex-col overflow-hidden border-b border-r border-line bg-paper p-7 md:min-h-[300px] md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-stone/70">
                    {service.number}
                  </span>
                  <Icon
                    size={27}
                    strokeWidth={1.25}
                    className="text-brass transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  />
                </div>
                <div className="mt-auto pt-14">
                  <h3 className="font-display text-2xl leading-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-stone">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-ink opacity-60 transition-all duration-300 group-hover:opacity-100 md:opacity-0"
                  >
                    Enquire <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
