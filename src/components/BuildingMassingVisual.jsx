import { motion, useReducedMotion } from "framer-motion";
import BrandDiamond from "./BrandDiamond";

const slabs = [
  "M112 256 196 208 300 266 216 314Z",
  "M126 224 210 176 314 234 230 282Z",
  "M140 192 224 144 328 202 244 250Z",
  "M154 160 238 112 342 170 258 218Z",
];

function BuildingMassingVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative h-full min-h-[330px] overflow-hidden border border-black/8 bg-paper shadow-[0_24px_70px_rgba(23,24,23,0.08)]">
      <div className="architectural-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-6 border border-black/[0.06]" />
      <div className="absolute left-6 top-6 text-[8px] font-bold uppercase tracking-[0.28em] text-stone">
        concept model
      </div>
      <div className="absolute right-6 top-6 text-[8px] font-bold uppercase tracking-[0.28em] text-stone">
        01 / massing
      </div>

      <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full">
        <motion.path
          d="M54 328h120v58H54Zm38 0v58m82-58 50-28h88v58l-50 28h-88Zm50-28v58m88-58v58"
          fill="none"
          stroke="#171817"
          strokeOpacity=".14"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />

        <motion.path
          d="M70 96h96m-48 0v232M320 88v256m-18 0h36"
          fill="none"
          stroke="#a7895d"
          strokeOpacity=".62"
          strokeDasharray="5 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.35, ease: "easeInOut" }}
        />

        <motion.g
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {slabs.map((points, index) => (
            <motion.path
              key={points}
              d={points}
              fill={index % 2 === 0 ? "#f7f6f2" : "#eeece5"}
              stroke={index === slabs.length - 1 ? "#a7895d" : "#171817"}
              strokeOpacity={index === slabs.length - 1 ? 0.75 : 0.2}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.35 + index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
          <path
            d="M112 256v-96m196 106 34-96M216 314v-96"
            fill="none"
            stroke="#171817"
            strokeOpacity=".18"
          />
        </motion.g>

        <motion.line
          x1="72"
          x2="348"
          y1="250"
          y2="250"
          stroke="#a7895d"
          strokeWidth="1.2"
          strokeOpacity=".7"
          animate={reducedMotion ? undefined : { y1: [190, 310, 190], y2: [190, 310, 190] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        className="absolute bottom-6 left-6 flex items-center gap-3 bg-paper/85 p-3 shadow-xl backdrop-blur"
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrandDiamond className="h-8 w-10" title="The Heera Architects" />
        <span>
          <span className="block font-display text-lg leading-none text-ink">
            3D design
          </span>
          <span className="mt-1 block text-[7px] font-bold uppercase tracking-[0.22em] text-stone">
            plan to form
          </span>
        </span>
      </motion.div>
    </div>
  );
}

export default BuildingMassingVisual;
