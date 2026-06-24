import { Award, Gem, Layers3, Target } from "lucide-react";
import DiamondShape from "../components/DiamondShape";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionBlueprintAccent from "../components/SectionBlueprintAccent";

const stats = [
  { value: "50+", label: "Projects", icon: Layers3 },
  { value: "10+", label: "Design services", icon: Gem },
  { value: "100%", label: "Client focused", icon: Target },
  { value: "Modern", label: "& luxury designs", icon: Award },
];

function About() {
  return (
    <section id="about" className="section-space relative overflow-hidden bg-paper">
      <SectionBlueprintAccent className="-left-20 bottom-16 hidden h-64 w-64 lg:block" />
      <DiamondShape
        size={260}
        speed={35}
        opacity={0.04}
        className="absolute -right-24 top-12 text-ink"
      />

      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Our Studio"
            title={
              <>
                About The Heera
                <span className="block italic text-stone">Architects</span>
              </>
            }
          />

          <Reveal delay={0.12} className="lg:pt-10">
            <p className="font-display text-2xl leading-relaxed text-charcoal md:text-3xl">
              A Bhopal-based architectural firm founded by{" "}
              <span className="italic">Ar. Shivam Chouksey.</span>
            </p>
            <p className="mt-7 max-w-2xl leading-7 text-stone">
              The studio believes in tradition, conserving the essence of a
              place, and building a sustainable life. Every project is shaped
              with a unique identity, functional solutions, and the ambition to
              contribute positively to people and the earth.
            </p>
            <div className="mt-9 flex items-center gap-4">
              <span className="h-px w-16 bg-brass" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone">
                Beauty in every detail
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-14">
          <Reveal className="group relative min-h-[390px] overflow-hidden bg-ink md:min-h-[500px]">
            <img
              src="/images/studio/shivam-chouksey.jpeg"
              alt="Ar. Shivam Chouksey, founder of The Heera Architects"
              loading="lazy"
              className="h-full w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brass">
                Founder &amp; Principal Architect
              </p>
              <h3 className="mt-2 font-display text-3xl">Ar. Shivam Chouksey</h3>
            </div>
          </Reveal>

          <div className="flex flex-col justify-between">
            <Reveal>
              <p className="eyebrow">Design Philosophy</p>
              <p className="mt-6 font-display text-2xl leading-relaxed text-charcoal md:text-3xl">
                Pragmatic, free-flowing design led by sustainability,
                engineering, quality of detail, and client comfort.
              </p>
              <p className="mt-6 leading-7 text-stone">
                We process every space with an ideology to serve people and the
                environment. We craft the emotions of an individual and deliver
                the key to remarkable design.
              </p>
            </Reveal>

            <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Reveal
                    key={stat.label}
                    delay={index * 0.08}
                    className="group flex min-h-48 flex-col border-b border-r border-line bg-paper p-6 transition-colors duration-300 hover:bg-ivory md:p-7"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.3}
                      className="mb-8 text-brass transition-transform duration-500 group-hover:rotate-12"
                    />
                    <strong className="mt-auto block font-display text-4xl font-normal text-ink md:text-5xl">
                      {stat.value}
                    </strong>
                    <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-stone">
                      {stat.label}
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
