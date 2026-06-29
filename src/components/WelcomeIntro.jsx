import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BrandDiamond from "./BrandDiamond";

const words = ["THE", "HEERA", "ARCHITECTS"];

function WelcomeIntro({ darkMode, show, onComplete }) {
  useEffect(() => {
    if (!show) return undefined;

    const timer = window.setTimeout(onComplete, 2850);
    return () => window.clearTimeout(timer);
  }, [onComplete, show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="welcome-intro fixed inset-0 z-[100] grid place-items-center overflow-hidden px-6"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
            filter: "blur(8px)",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          aria-label="Welcome to The Heera Architects"
          role="status"
        >
          <motion.div
            className="welcome-blueprint absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="absolute h-[42rem] w-[42rem] rounded-full border border-brass/20"
            initial={{ scale: 0.65, opacity: 0, rotate: -24 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="welcome-outline-square absolute h-[24rem] w-[24rem] rotate-45 border"
            initial={{ scale: 0.6, opacity: 0, rotate: 12 }}
            animate={{ scale: 1, opacity: 1, rotate: 45 }}
            transition={{ duration: 1.25, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
            <motion.div
              className="relative grid place-items-center"
              initial={{ y: 18, scale: 0.78, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brass to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 0.72], opacity: [0, 1, 0.42] }}
                transition={{ duration: 1.35, delay: 0.65, ease: "easeInOut" }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <BrandDiamond
                  light={darkMode}
                  className="h-28 w-44 drop-shadow-2xl sm:h-36 sm:w-56"
                  title="The Heera Architects diamond logo"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.026, delayChildren: 0.65 },
                },
              }}
            >
              {words.map((word) => (
                <motion.span key={word} className="inline-flex">
                  {word.split("").map((letter, index) => (
                    <motion.span
                      key={`${word}-${letter}-${index}`}
                      className="welcome-letter font-display text-[clamp(1.7rem,7vw,4.4rem)] font-normal uppercase leading-none tracking-[-0.04em]"
                      variants={{
                        hidden: { y: 26, opacity: 0, filter: "blur(10px)" },
                        visible: {
                          y: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.62,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="mt-5 flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-stone"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 1.35 }}
            >
              <span>Architecture</span>
              <span className="size-1 rounded-full bg-brass" />
              <span>Interior</span>
            </motion.div>

            <motion.div
              className="welcome-loader-track mt-8 h-px w-52 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.45, duration: 0.4 }}
            >
              <motion.span
                className="block h-full w-1/2 bg-brass"
                initial={{ x: "-100%" }}
                animate={{ x: "230%" }}
                transition={{ duration: 1.05, delay: 1.55, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeIntro;
