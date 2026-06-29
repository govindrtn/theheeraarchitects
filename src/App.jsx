import { useEffect, useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/Process";
import DiamondCTA from "./sections/DiamondCTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WelcomeIntro from "./components/WelcomeIntro";

const routes = {
  "/": {
    title: "The Heera Architects | Architecture & Interior",
    content: (
      <>
        <Hero />
        <WhyChooseUs />
        <DiamondCTA />
      </>
    ),
  },
  "/about": {
    title: "About | The Heera Architects",
    content: <About />,
  },
  "/services": {
    title: "Services | The Heera Architects",
    content: (
      <>
        <Services />
        <DiamondCTA />
      </>
    ),
  },
  "/projects": {
    title: "Projects | The Heera Architects",
    content: (
      <>
        <Projects />
        <DiamondCTA />
      </>
    ),
  },
  "/process": {
    title: "Process | The Heera Architects",
    content: <Process />,
  },
  "/contact": {
    title: "Contact | The Heera Architects",
    content: <Contact />,
  },
};

const routePaths = Object.keys(routes);

function normalizePath(pathname) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  return routePaths.includes(cleanPath) ? cleanPath : "/";
}

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window === "undefined") return "/";
    return normalizePath(window.location.pathname);
  });
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("heera-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
    window.localStorage.setItem("heera-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.toggle("intro-lock", showIntro);
    return () => document.body.classList.remove("intro-lock");
  }, [showIntro]);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target.closest?.("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const nextPath = url.pathname.replace(/\/+$/, "") || "/";
      if (!routePaths.includes(nextPath)) return;

      event.preventDefault();
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, "", nextPath);
      }
      handleRouteChange();
    };

    window.addEventListener("popstate", handleRouteChange);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    document.title = routes[currentPath].title;
  }, [currentPath]);

  const page = routes[currentPath] ?? routes["/"];
  const isHome = currentPath === "/";

  return (
    <div className="app-shell min-h-screen overflow-x-hidden bg-ivory text-ink">
      <WelcomeIntro
        darkMode={darkMode}
        show={showIntro}
        onComplete={() => setShowIntro(false)}
      />
      <Header
        currentPath={currentPath}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((value) => !value)}
      />
      <main className={isHome ? "" : "routed-main"}>
        {page.content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
