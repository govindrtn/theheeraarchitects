import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import BrandDiamond from "./BrandDiamond";

const floorLines = [0.16, 0.31, 0.46, 0.61, 0.76];
const planPaths = [
  "M78 354h118v72H78Z",
  "M112 354v72M78 392h118M148 392v34M196 354l44-26h72v48l-44 26h-72Z",
  "M240 328v48M312 328v48M196 402v-48",
];

function interpolate(start, end, ratio) {
  return start + (end - start) * ratio;
}

function floorPath(ratio) {
  const left = [205, interpolate(210, 360, ratio)];
  const right = [315, interpolate(270, 420, ratio)];
  const side = [400, interpolate(220, 370, ratio)];

  return `M${left[0]} ${left[1]}L${right[0]} ${right[1]}L${side[0]} ${side[1]}`;
}

function ArchitecturalLogoScene() {
  const sceneRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 22 });
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const modelX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const modelY = useTransform(smoothY, [-1, 1], [-6, 6]);

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
      initial={{ opacity: 0, y: 28, scale: 0.94, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative mx-auto aspect-square w-full max-w-[500px] select-none"
      style={{ perspective: 1200 }}
      aria-label="Animated 3D building design study"
    >
      <div className="architectural-grid absolute inset-0 border border-black/8 bg-paper/80 shadow-[0_28px_90px_rgba(23,24,23,0.12)] backdrop-blur-sm" />
      <div className="absolute inset-5 border border-black/[0.06]" />
      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-[7px] font-bold uppercase tracking-[0.28em] text-stone">
        <span>3D Massing</span>
        <span>Floor Plan</span>
      </div>

      <motion.div
        className="absolute inset-[5%]"
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.svg
          viewBox="0 0 520 520"
          className="h-full w-full overflow-visible"
          style={{
            x: reducedMotion ? 0 : modelX,
            y: reducedMotion ? 0 : modelY,
            transform: "translateZ(55px)",
          }}
        >
          <defs>
            <linearGradient id="towerFront" x1="190" y1="210" x2="340" y2="430">
              <stop offset="0" stopColor="#f7f6f2" />
              <stop offset="1" stopColor="#d8d4c8" />
            </linearGradient>
            <linearGradient id="towerSide" x1="320" y1="220" x2="420" y2="410">
              <stop offset="0" stopColor="#c9c5b8" />
              <stop offset="1" stopColor="#9f9b90" />
            </linearGradient>
            <linearGradient id="towerTop" x1="210" y1="160" x2="400" y2="270">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#e5e2d8" />
            </linearGradient>
            <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="28" stdDeviation="18" floodColor="#171817" floodOpacity=".18" />
            </filter>
          </defs>

          <motion.path
            d="M92 382 284 272 442 360 250 468Z"
            fill="#eeece5"
            stroke="#171817"
            strokeOpacity=".12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeInOut" }}
          />

          {planPaths.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke={index === 0 ? "#171817" : "#a7895d"}
              strokeWidth={index === 0 ? 1.3 : 1}
              strokeOpacity={index === 0 ? 0.16 : 0.45}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.45 + index * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.g
            filter="url(#softShadow)"
            initial={{ y: 46, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.g
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <polygon points="120,310 190,270 280,320 210,360" fill="#f8f6ee" />
              <polygon points="120,310 210,360 210,430 120,380" fill="#ddd9cd" />
              <polygon points="210,360 280,320 280,390 210,430" fill="#bbb7aa" />
              <path d="M120 310 190 270 280 320 280 390 210 430 120 380Z" fill="none" stroke="#171817" strokeOpacity=".28" />
              <path d="M210 360v70M120 380l90 50M210 360l70-40" fill="none" stroke="#171817" strokeOpacity=".16" />
            </motion.g>

            <motion.g
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <polygon points="205,210 315,270 315,420 205,360" fill="url(#towerFront)" />
              <polygon points="315,270 400,220 400,370 315,420" fill="url(#towerSide)" />
              <polygon points="205,210 290,160 400,220 315,270" fill="url(#towerTop)" />
              <path
                d="M205 210 290 160 400 220 400 370 315 420 205 360ZM315 270v150M205 210l110 60M400 220l-85 50"
                fill="none"
                stroke="#171817"
                strokeOpacity=".36"
                strokeWidth="1.2"
              />
            </motion.g>

            {floorLines.map((ratio, index) => (
              <motion.path
                key={ratio}
                d={floorPath(ratio)}
                fill="none"
                stroke={index === 2 ? "#a7895d" : "#171817"}
                strokeOpacity={index === 2 ? 0.8 : 0.18}
                strokeWidth={index === 2 ? 1.3 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 1 + index * 0.16,
                  ease: "easeInOut",
                }}
              />
            ))}

            {[0.2, 0.38, 0.56, 0.74].map((ratio, index) => (
              <motion.path
                key={`vertical-${ratio}`}
                d={`M${interpolate(220, 300, ratio)} ${interpolate(218, 262, ratio)}L${interpolate(220, 300, ratio)} ${interpolate(355, 405, ratio)}`}
                fill="none"
                stroke="#171817"
                strokeOpacity=".12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.12 }}
              />
            ))}
          </motion.g>

          <motion.path
            d="M92 138h106m-36 0v212m-20 0h40M374 130v304m-18 0h36"
            fill="none"
            stroke="#a7895d"
            strokeOpacity=".8"
            strokeDasharray="5 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.5, ease: "easeInOut" }}
          />

          <motion.line
            x1="68"
            x2="460"
            y1="286"
            y2="286"
            stroke="#a7895d"
            strokeWidth="1.2"
            strokeOpacity=".7"
            animate={reducedMotion ? undefined : { y1: [250, 382, 250], y2: [250, 382, 250] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.g
            animate={reducedMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="205" cy="210" r="3" fill="#a7895d" />
            <circle cx="400" cy="220" r="3" fill="#a7895d" />
            <circle cx="315" cy="420" r="3" fill="#a7895d" />
          </motion.g>
        </motion.svg>
      </motion.div>

      <div className="absolute bottom-7 left-7 flex items-center gap-3">
        <span className="grid size-11 place-items-center bg-paper shadow-xl">
          <BrandDiamond className="h-7 w-9" title="The Heera Architects" />
        </span>
        <span>
          <span className="block text-[8px] font-bold uppercase tracking-[0.26em] text-stone">
            live model
          </span>
          <span className="mt-1 block font-display text-lg leading-none text-ink">
            Building study
          </span>
        </span>
      </div>

      <motion.div
        className="absolute right-7 top-[18%] border border-black/10 bg-paper/80 px-3 py-2 text-[7px] font-bold uppercase tracking-[0.22em] text-stone shadow-sm backdrop-blur"
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        elevation + 3d
      </motion.div>
    </motion.div>
  );
}

export default ArchitecturalLogoScene;
