import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Home,
  Info,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import BrandDiamond from "../components/BrandDiamond";
import { navLinks } from "../data/siteData";

const mobileLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Building2 },
  { label: "Projects", href: "#projects", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Phone },
];

function Header({ darkMode, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`theme-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="container-shell flex h-[5.25rem] items-center justify-between md:h-28">
          <div
            className={`desktop-header-shell mobile-header-shell flex w-full items-center justify-between rounded-[1.15rem] border px-3 py-2.5 ${
              scrolled ? "is-scrolled" : ""
            }`}
          >
            <a
              href="#home"
              className="desktop-brand-lockup group flex items-center gap-3"
              aria-label="The Heera Architects home"
            >
              <BrandDiamond
                light={darkMode}
                className="h-11 w-[4.5rem] md:h-16 md:w-24"
              />
              <span className="hidden border-l border-black/10 pl-3 xl:block">
                <strong className="block font-display text-[0.95rem] font-normal leading-none text-ink">
                  The Heera
                </strong>
                <span className="mt-1 block text-[6px] font-bold uppercase tracking-[0.28em] text-stone">
                  Architects
                </span>
              </span>
            </a>

            <nav
              className="desktop-nav relative hidden items-center rounded-xl border border-black/[0.06] bg-white/35 p-1.5 backdrop-blur-md lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`desktop-nav-link relative z-10 px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                      active ? "is-active text-ink" : "text-stone hover:text-ink"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="desktop-nav-active"
                        className="absolute inset-0 -z-10 rounded-lg bg-paper shadow-sm"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className="theme-toggle grid size-11 place-items-center rounded-xl border border-black/10 text-ink transition-all hover:-translate-y-0.5 hover:border-brass hover:text-brass"
                aria-label={darkMode ? "Use light theme" : "Use dark theme"}
              >
                <motion.span
                  key={darkMode ? "sun" : "moon"}
                  initial={{ rotate: -35, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </button>
              <a
                href="#contact"
                className="header-cta group hidden items-center gap-3 rounded-xl bg-ink px-5 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-brass md:inline-flex"
              >
                Start a project
                <span className="grid size-5 place-items-center rounded-full bg-white/10 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={12} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="mobile-dock md:hidden" aria-label="Mobile navigation">
        {mobileLinks.map((link) => {
          const Icon = link.icon;
          const active = activeSection === link.href.slice(1);
          return (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-dock-link ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="mobile-dock-icon">
                <Icon size={19} strokeWidth={active ? 2 : 1.6} />
              </span>
              <span>{link.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default Header;
