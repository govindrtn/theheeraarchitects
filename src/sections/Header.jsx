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
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Building2 },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Contact", href: "/contact", icon: Phone },
];

function Header({ currentPath = "/", darkMode, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileHeaderHidden, setMobileHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      setScrolled(currentScrollY > 18);

      if (!isMobile) {
        setMobileHeaderHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < 70) {
        setMobileHeaderHidden(false);
      } else if (currentScrollY > lastScrollY + 6) {
        setMobileHeaderHidden(true);
      } else if (currentScrollY < lastScrollY - 6) {
        setMobileHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileHeaderHidden(false);
  }, [currentPath]);

  return (
    <>
      <header
        className={`theme-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "is-scrolled" : ""
        } ${mobileHeaderHidden ? "is-mobile-hidden" : ""}`}
      >
        <div className="container-shell flex h-[4.35rem] items-center justify-between md:h-28">
          <div
            className={`desktop-header-shell mobile-header-shell flex w-full items-center justify-between rounded-[1rem] border px-2.5 py-2 md:rounded-[1.15rem] md:px-3 md:py-2.5 ${
              scrolled ? "is-scrolled" : ""
            }`}
          >
            <a
              href="/"
              className="desktop-brand-lockup group flex min-w-0 items-center gap-2.5 md:gap-3"
              aria-label="The Heera Architects home"
            >
              <BrandDiamond
                light={darkMode}
                className="h-9 w-[3.8rem] shrink-0 md:h-16 md:w-24"
              />
              <span className="mobile-brand-copy min-w-0 border-l border-black/10 pl-2.5 md:hidden">
                <strong className="block truncate font-display text-[0.95rem] font-normal leading-none text-ink">
                  The Heera
                </strong>
                <span className="mt-0.5 block truncate text-[0.46rem] font-bold uppercase tracking-[0.24em] text-stone">
                  Architects
                </span>
              </span>
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
                const active = currentPath === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
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
                className="theme-toggle grid size-9 place-items-center rounded-[0.85rem] border border-black/10 text-ink transition-all hover:-translate-y-0.5 hover:border-brass hover:text-brass md:size-11 md:rounded-xl"
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
                href="/contact"
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
          const active = currentPath === link.href;
          return (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-dock-link ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="mobile-dock-icon">
                <Icon size={17} strokeWidth={active ? 2 : 1.6} />
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
