import { ArrowRight, Download } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">

      {/* Primary Button */}
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 sm:gap-3 rounded-2xl
        bg-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white
        shadow-[0_10px_30px_rgba(255,107,0,.30)]
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-orange-400
        hover:shadow-[0_15px_40px_rgba(255,107,0,.45)]
        focus:outline-none
        focus:ring-2
        focus:ring-orange-500
        focus:ring-offset-2
        focus:ring-offset-transparent
        active:scale-95"
        aria-label="Explore my work and projects"
      >
        <span>Explore My Work</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>

      {/* Secondary Button */}
      <a
        href="./resume.pdf?v=1.0.1"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 sm:gap-3 rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        px-6 sm:px-8 py-3 sm:py-4
        text-sm sm:text-base
        font-semibold text-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500/40
        hover:bg-white/10
        focus:outline-none
        focus:ring-2
        focus:ring-orange-500
        focus:ring-offset-2
        focus:ring-offset-transparent
        active:scale-95"
        aria-label="Download my resume (opens in new window)"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />

        <span>Download Resume</span>
      </a>

    </div>
  );
};

export default HeroButtons;