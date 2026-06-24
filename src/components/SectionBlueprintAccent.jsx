import { motion, useReducedMotion } from "framer-motion";

function SectionBlueprintAccent({ className = "", reverse = false }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      className={`pointer-events-none absolute text-ink ${className}`}
      animate={
        reducedMotion
          ? undefined
          : { rotate: reverse ? [0, -5, 0] : [0, 5, 0] }
      }
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path
        d="M24 52h132l60 60v104H84L24 156Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".12"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <motion.path
        d="M52 80h92l44 44v64H96l-44-44Zm0 0 136 108m0-108L52 188"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".08"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="24"
        cy="52"
        r="3"
        fill="currentColor"
        fillOpacity=".35"
        animate={reducedMotion ? undefined : { opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
      <motion.circle
        cx="216"
        cy="216"
        r="3"
        fill="#a7895d"
        animate={reducedMotion ? undefined : { scale: [1, 1.7, 1] }}
        transition={{ duration: 3.2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

export default SectionBlueprintAccent;
