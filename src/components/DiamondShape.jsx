import { motion } from "framer-motion";

function DiamondShape({
  size = 280,
  speed = 24,
  opacity = 0.3,
  className = "",
  reverse = false,
  inner = true,
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size, opacity }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, ease: "linear", repeat: Infinity }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-[15%] rotate-45 border border-current" />
        {inner && (
          <div className="absolute inset-[29%] rotate-45 border border-current opacity-50" />
        )}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current opacity-25" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current opacity-25" />
      </div>
    </motion.div>
  );
}

export default DiamondShape;
