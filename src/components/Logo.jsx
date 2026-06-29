import BrandDiamond from "./BrandDiamond";

function Logo({ light = false, markOnly = false, className = "" }) {
  return (
    <a
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="The Heera Architects home"
    >
      {markOnly ? (
        <BrandDiamond
          title="The Heera Architects"
          light={light}
          className="h-14 w-[5.5rem] md:h-16 md:w-24"
        />
      ) : (
        <img
          src="/logo.png"
          alt="The Heera Architects"
          className={`h-[4.5rem] w-[9.5rem] object-contain md:h-20 md:w-44 ${
            light ? "brightness-0 invert" : ""
          }`}
        />
      )}
    </a>
  );
}

export default Logo;
