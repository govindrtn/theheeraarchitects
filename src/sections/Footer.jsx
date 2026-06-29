import {
  ArrowUp,
  Clock3,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  contactDetails,
  navLinks,
  services,
  socialLinks,
} from "../data/siteData";
import BrandDiamond from "../components/BrandDiamond";

const socialIcons = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
};

const contactItems = [
  { icon: Phone, value: contactDetails.phone, href: "tel:+919584695529" },
  {
    icon: Phone,
    value: contactDetails.secondaryPhone,
    href: "tel:+919981995529",
  },
  {
    icon: Mail,
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  { icon: MapPin, value: contactDetails.location },
  { icon: Clock3, value: contactDetails.hours },
];

const maithilWebworksInstagram =
  "https://www.instagram.com/maithilwebworks?igsh=bXhidDJsZDltZWd0&utm_source=qr";

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-shell">
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1fr] lg:py-20">
          <div>
            <a
              href="/"
              aria-label="The Heera Architects home"
              className="footer-brand inline-flex items-center gap-4 border border-white/10 px-4 py-3"
            >
              <BrandDiamond
                light
                title="The Heera Architects"
                className="h-14 w-[4.5rem] shrink-0"
              />
              <span className="border-l border-white/15 pl-4">
                <strong className="block font-display text-lg font-normal tracking-wide text-white">
                  The Heera Architects
                </strong>
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.24em] text-brass">
                  Architecture • Interior
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
              Creating considered architecture and refined interiors for modern
              living.
            </p>
            <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.28em] text-brass">
              Architecture • Interior
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Follow The Heera Architects on ${link.label}`}
                    title={link.label}
                    className="group grid size-10 place-items-center border border-white/15 text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-white"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>
            <div className="mt-6 flex flex-col gap-3">
              {navLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-brass"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>
            <div className="mt-6 flex flex-col gap-3">
              {services.slice(0, 5).map((service) => (
                <a
                  key={service.title}
                  href="/services"
                  className="w-fit text-sm text-white/65 transition-colors hover:text-brass"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <div className="mt-6 space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-brass"
                    />
                    <span className="break-all">{item.value}</span>
                  </>
                );

                return item.href ? (
                  <a
                    key={`${item.value}-${index}`}
                    href={item.href}
                    className="flex gap-3 text-sm leading-6 text-white/65 transition-colors hover:text-white"
                  >
                    {content}
                  </a>
                ) : (
                  <p
                    key={`${item.value}-${index}`}
                    className="flex gap-3 text-sm leading-6 text-white/65"
                  >
                    {content}
                  </p>
                );
              })}
            </div>
            <a
              href="/"
              className="mt-8 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white"
            >
              Back to top
              <span className="grid size-8 place-items-center border border-white/20">
                <ArrowUp size={13} />
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[9px] uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Heera Architects. All rights reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href={maithilWebworksInstagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-brass"
            >
              Maithil Webworks
              <ExternalLink
                size={10}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
