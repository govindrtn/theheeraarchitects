import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const wallPaths = [
  "M32 178h88v-54h56v92H32Z",
  "M32 124h38V76h106v48",
  "M70 124v54M120 124v92M176 124h32v48h-32",
  "M54 98h38M142 76v48M142 160h34M208 172v44",
];

function SectionBlueprintAccent({ className = "", reverse = false }) {
  const reducedMotion = useReducedMotion();
  const gridId = useId().replace(/:/g, "");

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      className={`pointer-events-none absolute text-ink ${className}`}
      animate={
        reducedMotion
          ? undefined
          : { y: reverse ? [0, -8, 0] : [0, 8, 0] }
      }
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <pattern id={`accent-grid-${gridId}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M16 0H0v16"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".055"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="240" height="240" fill={`url(#accent-grid-${gridId})`} />

      {wallPaths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke={index === 0 ? "currentColor" : "#a7895d"}
          strokeOpacity={index === 0 ? 0.18 : 0.45}
          strokeWidth={index === 0 ? 1.4 : 1}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1.25,
            delay: index * 0.14,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.g
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M74 78 116 54l62 34-42 24Z"
          fill="none"
          stroke="currentColor"
          strokeOpacity=".2"
        />
        <path
          d="M74 78v44l62 34v-44Zm62 34 42-24v44l-42 24"
          fill="none"
          stroke="currentColor"
          strokeOpacity=".16"
        />
        <path
          d="M90 100 136 125l28-16M90 116l46 25 28-16"
          fill="none"
          stroke="#a7895d"
          strokeOpacity=".45"
        />
      </motion.g>

      <motion.path
        d="M24 32h192M24 220h192"
        fill="none"
        stroke="#a7895d"
        strokeOpacity=".45"
        strokeDasharray="4 8"
        animate={reducedMotion ? undefined : { pathLength: [0.25, 1, 0.25] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.circle
        cx="32"
        cy="178"
        r="3"
        fill="#a7895d"
        animate={reducedMotion ? undefined : { scale: [1, 1.7, 1] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="208"
        cy="216"
        r="3"
        fill="currentColor"
        fillOpacity=".25"
        animate={reducedMotion ? undefined : { opacity: [0.15, 0.55, 0.15] }}
        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export default SectionBlueprintAccent;
