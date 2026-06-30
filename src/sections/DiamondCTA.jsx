import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

function DiamondCTA() {
  return (
    <section className="fine-grid relative overflow-hidden bg-charcoal py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-charcoal/90" />
      <div className="container-shell relative z-10">
        <div className="relative grid min-h-[440px] place-items-center overflow-hidden border border-white/[0.08] px-5 py-16 text-center md:min-h-[500px]">
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 720 420"
            className="absolute inset-0 h-full w-full opacity-45"
          >
            <motion.path
              d="M70 330 250 230 430 330 250 430ZM250 230v200M70 330v-84l180-100 180 100v84M130 296l120-66 120 66M130 262l120-66 120 66M130 228l120-66 120 66"
              fill="none"
              stroke="#ffffff"
              strokeOpacity=".24"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.7, ease: "easeInOut" }}
            />
            <motion.path
              d="M486 330h112V178H486Zm28 0V178m28 152V178m28 152V178m-84 38h112m-112 38h112m-112 38h112m-112 38h112"
              fill="none"
              stroke="#a7895d"
              strokeOpacity=".55"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.35, ease: "easeInOut" }}
            />
            <motion.line
              x1="58"
              x2="652"
              y1="204"
              y2="204"
              stroke="#a7895d"
              strokeOpacity=".5"
              strokeDasharray="8 12"
              animate={{ y1: [174, 342, 174], y2: [174, 342, 174] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>

          <Reveal className="relative z-10 mx-auto max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-brass">
              Begin a conversation
            </p>
            <h2 className="display-title mt-6 text-[clamp(2.8rem,6vw,5.4rem)] text-paper">
              Let’s design your
              <span className="block italic text-white/55">dream space.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Connect with The Heera Architects for modern architecture and
              interior design solutions.
            </p>
            <a
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 bg-paper px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass hover:text-white"
            >
              Start Your Project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default DiamondCTA;
