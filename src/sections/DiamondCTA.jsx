import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import BrandDiamond from "../components/BrandDiamond";
import Reveal from "../components/Reveal";

function DiamondCTA() {
  return (
    <section className="fine-grid relative overflow-hidden bg-charcoal py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-charcoal/90" />
      <div className="container-shell relative z-10">
        <div className="relative grid min-h-[440px] place-items-center overflow-hidden border border-white/[0.08] px-5 py-16 text-center md:min-h-[500px]">
          <motion.div
            aria-hidden="true"
            className="absolute size-[390px] rotate-45 border border-white/10 md:size-[480px]"
            animate={{ rotate: [45, 53, 45] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute size-[270px] rotate-45 border border-brass/20 md:size-[330px]"
            animate={{ rotate: [45, 36, 45] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <BrandDiamond className="absolute h-72 w-80 opacity-[0.045] md:h-96 md:w-[28rem]" />

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
              href="#contact"
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
