import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/siteData";

function Projects() {
  return (
    <section id="projects" className="section-space bg-ink text-white">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            light
            eyebrow="Selected Work"
            title={
              <>
                Spaces with a
                <span className="block italic text-white/45">quiet confidence.</span>
              </>
            }
          />
          <Reveal delay={0.12}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
            >
              Discuss your project
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-18">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 2) * 0.1}
              className={`project-card group ${
                index % 2 === 1 ? "lg:mt-24" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-image h-full w-full object-cover grayscale-[25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                <span className="absolute left-5 top-5 border border-white/30 bg-black/15 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  0{index + 1}
                </span>
                <a
                  href="#contact"
                  aria-label={`View details for ${project.title}`}
                  className="absolute bottom-5 right-5 grid size-12 translate-y-3 place-items-center bg-paper text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="flex flex-col gap-3 border-b border-white/15 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brass">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <span className="text-[9px] uppercase tracking-[0.16em] text-white/45 sm:mt-1 sm:text-right">
                  {project.detail}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
