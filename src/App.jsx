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

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("heera-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
    window.localStorage.setItem("heera-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app-shell min-h-screen overflow-x-hidden bg-ivory text-ink">
      <Header
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((value) => !value)}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <DiamondCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
