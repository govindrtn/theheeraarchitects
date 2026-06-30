import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import BrandDiamond from "./BrandDiamond";

const front = {
  topLeft: [226, 190],
  topRight: [384, 272],
  bottomRight: [384, 458],
  bottomLeft: [226, 376],
};

const side = {
  topLeft: [384, 272],
  topRight: [520, 196],
  bottomRight: [520, 384],
  bottomLeft: [384, 458],
};

const floors = [0.14, 0.28, 0.42, 0.56, 0.7, 0.84];
const columns = [0.24, 0.48, 0.72];
const sideColumns = [0.33, 0.66];

function pointBetween(a, b, ratio) {
  return [a[0] + (b[0] - a[0]) * ratio, a[1] + (b[1] - a[1]) * ratio];
}

function linePath(a, b) {
  return `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`;
}

function floorPath(ratio) {
  const frontLeft = pointBetween(front.topLeft, front.bottomLeft, ratio);
  const frontRight = pointBetween(front.topRight, front.bottomRight, ratio);
  const sideRight = pointBetween(side.topRight, side.bottomRight, ratio);
  return `M${frontLeft[0]} ${frontLeft[1]}L${frontRight[0]} ${frontRight[1]}L${sideRight[0]} ${sideRight[1]}`;
}

function ArchitecturalLogoScene() {
  const sceneRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const rotateY = useTransform(smoothX, [-1, 1], [-9, 9]);
  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]);
  const shiftX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const shiftY = useTransform(smoothY, [-1, 1], [-7, 7]);

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
      initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative mx-auto aspect-square w-full max-w-[560px] select-none"
      style={{ perspective: 1200 }}
      aria-label="3D architectural building construction animation"
    >
      <div className="absolute inset-0 border border-black/8 bg-paper/90 shadow-[0_28px_90px_rgba(23,24,23,0.14)] backdrop-blur-sm" />
      <div className="architectural-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-4 border border-black/[0.06] md:inset-6" />

      <div className="absolute left-5 top-5 z-10 flex items-center gap-3 md:left-7 md:top-7">
        <span className="grid size-10 place-items-center bg-paper shadow-lg md:size-12">
          <BrandDiamond className="h-7 w-8 md:h-8 md:w-10" title="The Heera Architects" />
        </span>
        <span>
          <span className="block text-[7px] font-bold uppercase tracking-[0.26em] text-stone">
            architectural
          </span>
          <span className="block font-display text-base leading-none text-ink md:text-xl">
            3D Design Studio
          </span>
        </span>
      </div>

      <motion.div
        className="absolute inset-[3%]"
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          x: reducedMotion ? 0 : shiftX,
          y: reducedMotion ? 0 : shiftY,
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 620 560" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="hero-front" x1="240" y1="190" x2="390" y2="460">
              <stop offset="0" stopColor="#fdfcf9" />
              <stop offset="1" stopColor="#d8d3c7" />
            </linearGradient>
            <linearGradient id="hero-side" x1="390" y1="220" x2="520" y2="430">
              <stop offset="0" stopColor="#c7c2b5" />
              <stop offset="1" stopColor="#8f8a7f" />
            </linearGradient>
            <linearGradient id="hero-top" x1="240" y1="120" x2="520" y2="260">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#ece8dc" />
            </linearGradient>
            <filter id="hero-building-shadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="28" stdDeviation="20" floodColor="#171817" floodOpacity=".2" />
            </filter>
          </defs>

          <motion.path
            d="M82 420 306 292 548 420 322 548Z"
            fill="#ece8dc"
            stroke="#171817"
            strokeOpacity=".12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeInOut" }}
          />

          <motion.g
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.path
              d="M98 118v302M74 420h72M98 118h246M98 118l74 58M314 118v58"
              fill="none"
              stroke="#171817"
              strokeOpacity=".28"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.25, ease: "easeInOut" }}
            />
            <motion.path
              d="M314 118v94"
              stroke="#a7895d"
              strokeWidth="2"
              strokeOpacity=".9"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.65, delay: 1.05, ease: "easeInOut" }}
            />
            <motion.rect
              x="302"
              y="202"
              width="24"
              height="18"
              fill="#a7895d"
              rx="2"
              animate={reducedMotion ? undefined : { y: [190, 224, 190] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          <motion.g
            filter="url(#hero-building-shadow)"
            initial={{ opacity: 0, y: 76 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <polygon points="226,190 362,112 520,196 384,272" fill="url(#hero-top)" />
            <polygon points="226,190 384,272 384,458 226,376" fill="url(#hero-front)" />
            <polygon points="384,272 520,196 520,384 384,458" fill="url(#hero-side)" />

            <path
              d="M226 190 362 112 520 196 520 384 384 458 226 376ZM384 272v186M226 190l158 82M520 196l-136 76"
              fill="none"
              stroke="#171817"
              strokeOpacity=".4"
              strokeWidth="1.6"
            />

            {floors.map((ratio, index) => (
              <motion.path
                key={ratio}
                d={floorPath(ratio)}
                fill="none"
                stroke={index === 3 ? "#a7895d" : "#171817"}
                strokeOpacity={index === 3 ? 0.9 : 0.22}
                strokeWidth={index === 3 ? 2 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.95 + index * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}

            {columns.map((ratio, index) => {
              const top = pointBetween(front.topLeft, front.topRight, ratio);
              const bottom = pointBetween(front.bottomLeft, front.bottomRight, ratio);
              return (
                <motion.path
                  key={`front-column-${ratio}`}
                  d={linePath(top, bottom)}
                  fill="none"
                  stroke="#171817"
                  strokeOpacity=".12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.75, delay: 1.25 + index * 0.1 }}
                />
              );
            })}

            {sideColumns.map((ratio, index) => {
              const top = pointBetween(side.topLeft, side.topRight, ratio);
              const bottom = pointBetween(side.bottomLeft, side.bottomRight, ratio);
              return (
                <motion.path
                  key={`side-column-${ratio}`}
                  d={linePath(top, bottom)}
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity=".16"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.75, delay: 1.35 + index * 0.1 }}
                />
              );
            })}

            <motion.path
              d="M246 210 382 134 492 192"
              fill="none"
              stroke="#a7895d"
              strokeOpacity=".75"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 1.55, ease: "easeInOut" }}
            />
          </motion.g>

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            <path
              d="M70 454h112v62H70Zm36 0v62m76-62 48-26h92v62l-48 26h-92Zm48-26v62m92-62v62"
              fill="none"
              stroke="#171817"
              strokeOpacity=".18"
            />
            <path
              d="M70 486h112M230 458h92M182 454l48-26"
              fill="none"
              stroke="#a7895d"
              strokeOpacity=".45"
            />
          </motion.g>

          <motion.line
            x1="188"
            x2="552"
            y1="310"
            y2="310"
            stroke="#a7895d"
            strokeWidth="2"
            strokeOpacity=".82"
            strokeDasharray="10 12"
            animate={reducedMotion ? undefined : { y1: [250, 430, 250], y2: [250, 430, 250] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-5 right-5 border border-black/10 bg-paper/90 px-3 py-2 text-[7px] font-bold uppercase tracking-[0.22em] text-stone shadow-lg backdrop-blur md:bottom-7 md:right-7"
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        building + 3d + plan
      </motion.div>
    </motion.div>
  );
}

export default ArchitecturalLogoScene;
