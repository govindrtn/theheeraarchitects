import BuildingMassingVisual from "../components/BuildingMassingVisual";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { benefits } from "../data/siteData";

function WhyChooseUs() {
  return (
    <section className="section-space relative overflow-hidden bg-paper">
      <div className="absolute bottom-0 left-0 top-0 hidden w-[42%] bg-[#eeece5] lg:block" />

      <div className="container-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="relative h-[340px] w-full max-w-xl justify-self-center sm:aspect-square sm:h-auto lg:max-w-none">
          <BuildingMassingVisual />
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Designed around
                <span className="block italic text-stone">what matters.</span>
              </>
            }
            description="We balance ambition with practicality—bringing disciplined thinking, close collaboration, and an eye for refinement to every project."
          />

          <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal
                  key={benefit.title}
                  delay={(index % 2) * 0.08}
                  className="group min-h-36 border-t border-line py-6"
                >
                  <div className="flex gap-4">
                    <Icon
                      size={21}
                      strokeWidth={1.3}
                      className="mt-1 shrink-0 text-brass transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <h3 className="font-display text-xl text-ink">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-stone">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
