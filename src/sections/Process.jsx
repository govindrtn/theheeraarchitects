import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SectionBlueprintAccent from "../components/SectionBlueprintAccent";
import { processSteps } from "../data/siteData";

function Process() {
  return (
    <section id="process" className="section-space relative overflow-hidden bg-ivory">
      <SectionBlueprintAccent
        reverse
        className="-left-20 top-16 hidden h-72 w-72 opacity-60 lg:block"
      />
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Process"
          align="center"
          title={
            <>
              A clear path from
              <span className="block italic text-stone">conversation to creation.</span>
            </>
          }
          description="Good design feels effortless at the end because the process behind it is rigorous, transparent, and collaborative."
        />

        <div className="relative mt-14 lg:mt-20">
          <div className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-px bg-line lg:block" />
          <motion.div
            className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-px origin-left bg-brass lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative flex min-h-[185px] flex-col border border-line bg-paper p-6 lg:min-h-[235px] lg:border-0 lg:bg-transparent lg:px-4 lg:py-0 lg:text-center"
              >
                <div className="relative z-10 grid size-14 place-items-center border border-line bg-ivory font-display text-lg text-ink transition-all duration-300 group-hover:rotate-45 group-hover:border-brass group-hover:bg-brass group-hover:text-white lg:mx-auto">
                  <span className="transition-transform duration-300 group-hover:-rotate-45">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl leading-tight text-ink lg:flex lg:min-h-14 lg:items-start lg:justify-center">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-stone lg:mt-auto">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
