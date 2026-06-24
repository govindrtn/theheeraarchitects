import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import BrandDiamond from "./BrandDiamond";

const orbitPoints = [
  { label: "FORM", position: "left-[7%] top-[23%]", delay: 0 },
  { label: "LIGHT", position: "right-[2%] top-[42%]", delay: 0.7 },
  { label: "SPACE", position: "bottom-[10%] left-[20%]", delay: 1.4 },
];

function ArchitecturalLogoScene() {
  const sceneRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 22 });
  const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);
  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]);
  const translateX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const translateY = useTransform(smoothY, [-1, 1], [-7, 7]);

  const handlePointerMove = (event) => {
    if (reducedMotion || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={sceneRef}
      initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative mx-auto aspect-square w-full max-w-[490px] select-none"
      style={{ perspective: 1100 }}
      aria-label="Interactive architectural identity animation"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-[3%] rounded-full border border-black/[0.07]"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass shadow-[0_0_0_6px_rgba(167,137,93,0.08)]" />
        <span className="absolute bottom-[12%] right-[12%] size-1.5 rounded-full bg-ink/45" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-[13%] rounded-full border border-dashed border-brass/30"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[2%] h-[96%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-[2%] top-1/2 h-px w-[96%] -translate-y-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />

      {orbitPoints.map((point) => (
        <motion.div
          key={point.label}
          className={`absolute z-30 flex items-center gap-2 ${point.position}`}
          animate={
            reducedMotion
              ? undefined
              : { y: [0, -5, 0], opacity: [0.55, 1, 0.55] }
          }
          transition={{
            duration: 3.4,
            delay: point.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="size-1.5 rounded-full bg-brass" />
          <span className="text-[7px] font-bold tracking-[0.26em] text-stone">
            {point.label}
          </span>
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-[12%]"
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-[3%] border border-ink/40"
          animate={reducedMotion ? undefined : { rotate: [8, 14, 8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-[12%] border border-black/15"
          animate={reducedMotion ? undefined : { rotate: [-7, -12, -7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-[18%] overflow-hidden border border-white bg-paper/90 shadow-[0_28px_90px_rgba(23,24,23,0.18)] backdrop-blur-sm">
          <div className="architectural-grid absolute inset-0 opacity-70" />
          <div className="absolute inset-3 border border-black/[0.07]" />

          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 w-[28%] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm"
            animate={reducedMotion ? undefined : { x: ["-140%", "480%"] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              repeatDelay: 1.6,
              ease: [0.45, 0, 0.2, 1],
            }}
          />

          <motion.div
            className="absolute inset-0 grid place-items-center"
            style={{
              x: reducedMotion ? 0 : translateX,
              y: reducedMotion ? 0 : translateY,
              transform: "translateZ(55px)",
            }}
          >
            <motion.div
              className="grid h-[68%] w-[82%] place-items-center drop-shadow-[0_18px_25px_rgba(0,0,0,0.16)]"
              animate={
                reducedMotion
                  ? undefined
                  : { scale: [1, 1.018, 1] }
              }
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <BrandDiamond
                title="The Heera Architects diamond"
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>

          <motion.span
            aria-hidden="true"
            className="absolute left-0 right-0 h-px bg-brass/80 shadow-[0_0_14px_rgba(167,137,93,0.65)]"
            animate={reducedMotion ? undefined : { top: ["10%", "90%", "10%"] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-ink/55" />
          <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-ink/55" />
          <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-ink/55" />
          <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ink/55" />
        </div>

        <div className="absolute left-[2%] top-1/2 flex -translate-y-1/2 items-center gap-2">
          <span className="h-px w-7 bg-ink/30" />
          <span className="text-[6px] font-bold tracking-[0.22em] text-stone">
            23.2599° N
          </span>
        </div>
        <div className="absolute bottom-[4%] right-[8%] flex items-center gap-2">
          <span className="text-[6px] font-bold tracking-[0.22em] text-stone">
            77.4126° E
          </span>
          <span className="h-px w-7 bg-ink/30" />
        </div>
      </motion.div>

      <div className="absolute bottom-[1%] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
        <span className="h-px w-8 bg-brass/70" />
        <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-stone">
          Identity in motion
        </span>
        <span className="h-px w-8 bg-brass/70" />
      </div>

      <motion.span
        aria-hidden="true"
        className="absolute right-[5%] top-[12%] font-display text-[2.6rem] leading-none text-ink/[0.06]"
        animate={reducedMotion ? undefined : { opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        01
      </motion.span>
    </motion.div>
  );
}

export default ArchitecturalLogoScene;
