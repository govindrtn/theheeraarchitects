import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import ArchitecturalLogoScene from "../components/ArchitecturalLogoScene";

const entrance = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Hero() {
  return (
    <section
      id="home"
      className="architectural-grid relative flex min-h-[780px] items-center overflow-hidden border-b border-black/8 pt-24 md:min-h-screen"
    >
      <div className="hero-wash absolute inset-0 bg-gradient-to-br from-ivory via-ivory/94 to-[#e9e7df]/80" />
      <div className="absolute bottom-0 right-[10%] top-0 hidden w-px bg-black/8 lg:block" />
      <div className="absolute left-[52%] top-0 hidden h-full w-px bg-black/8 lg:block" />

      <div className="container-shell relative z-10 grid items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-24">
        <div className="max-w-4xl">
          <motion.p
            variants={entrance}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="eyebrow"
          >
            Architecture • Interior
          </motion.p>

          <motion.h1
            variants={entrance}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="display-title mt-6 text-[clamp(3.1rem,6.8vw,6.75rem)]"
          >
            Building dreams
            <span className="block italic text-stone">with modern</span>
            architecture.
          </motion.h1>

          <motion.p
            variants={entrance}
            initial="hidden"
            animate="visible"
            custom={0.34}
            className="mt-7 max-w-xl text-[0.95rem] leading-7 text-stone md:text-[1.05rem] md:leading-8"
          >
            The Heera Architects creates elegant architectural and interior
            spaces with a balance of design, functionality, and luxury.
          </motion.p>

          <motion.div
            variants={entrance}
            initial="hidden"
            animate="visible"
            custom={0.46}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 bg-ink px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brass"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-ink/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-white/60"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-4 w-full max-w-[390px] lg:mt-0 lg:max-w-[490px]">
          <ArchitecturalLogoScene />
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-stone md:flex"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="grid size-8 place-items-center rounded-full border border-black/15"
        >
          <ArrowDown size={13} />
        </motion.span>
        Explore
      </motion.a>
    </section>
  );
}

export default Hero;
