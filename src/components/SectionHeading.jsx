import Reveal from "./Reveal";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`max-w-[46rem] ${centered ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow ${centered ? "justify-center" : ""} ${
          light ? "!text-white/55" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`display-title mt-5 text-[clamp(2.35rem,5.2vw,4.65rem)] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-[0.95rem] leading-7 md:text-[1.05rem] md:leading-8 ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-stone"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
