import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail, MapPin, Phone, Send, X } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionBlueprintAccent from "../components/SectionBlueprintAccent";
import { contactDetails } from "../data/siteData";

const infoCards = [
  { icon: Phone, label: "Call us", value: contactDetails.phone },
  { icon: Phone, label: "Alternate number", value: contactDetails.secondaryPhone },
  { icon: Mail, label: "Write to us", value: contactDetails.email },
  { icon: MapPin, label: "Based in", value: contactDetails.location },
];

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section id="contact" className="section-space relative overflow-hidden bg-paper">
      <SectionBlueprintAccent className="-right-20 bottom-4 hidden h-64 w-64 opacity-50 lg:block" />
      <div className="container-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Tell us about
                  <span className="block italic text-stone">your vision.</span>
                </>
              }
              description="Whether it begins with a plot, a room, or simply an idea—we would love to hear what you are imagining."
            />

            <div className="mt-10 border-t border-line">
              {infoCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.label}
                    delay={index * 0.07}
                    className="flex items-center gap-4 border-b border-line py-5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center border border-line text-brass">
                      <Icon size={18} strokeWidth={1.4} />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words font-display text-lg text-ink">
                        {item.value}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.12} className="self-start border border-line bg-ivory p-6 sm:p-9 lg:p-10 xl:p-12">
            <div className="mb-9 flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display text-2xl text-ink">Project enquiry</h3>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                All fields required
              </span>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                  Your name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  className="field !border-x-0 !border-t-0"
                />
              </label>
              <label className="block">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                  Phone
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91"
                  className="field !border-x-0 !border-t-0"
                />
              </label>
              <label className="block">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="field !border-x-0 !border-t-0"
                />
              </label>
              <label className="block">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                  Project type
                </span>
                <select
                  required
                  name="projectType"
                  defaultValue=""
                  className="field !border-x-0 !border-t-0"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Residential Architecture</option>
                  <option>Commercial Architecture</option>
                  <option>Interior Design</option>
                  <option>Renovation Design</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone">
                  Tell us about your project
                </span>
                <textarea
                  required
                  name="message"
                  rows="4"
                  placeholder="Location, scope, timeline, and anything else you'd like us to know..."
                  className="field resize-none !border-x-0 !border-t-0"
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brass sm:w-auto"
                >
                  Submit Enquiry
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-5 left-4 right-4 z-[70] flex items-center gap-4 bg-ink p-4 text-white shadow-2xl sm:left-auto sm:right-6 sm:max-w-md"
            role="status"
          >
            <span className="grid size-10 shrink-0 place-items-center bg-brass">
              <Check size={19} />
            </span>
            <p className="flex-1 text-sm leading-5">
              Thank you! The Heera Architects team will contact you soon.
            </p>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              aria-label="Close notification"
              className="text-white/50 hover:text-white"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
