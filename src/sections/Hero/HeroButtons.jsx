import { ArrowRight, Download } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {/* Primary Button */}
      <a
        href="#projects"
        className="group inline-flex items-center gap-3 rounded-2xl
        bg-orange-500 px-8 py-4 font-semibold text-white
        shadow-[0_10px_30px_rgba(255,107,0,.30)]
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-orange-400
        hover:shadow-[0_15px_40px_rgba(255,107,0,.45)]"
      >
        Explore My Work

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      {/* Secondary Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        px-8 py-4
        font-semibold text-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-500/40
        hover:bg-white/10"
      >
        <Download
          size={19}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />

        Download Resume
      </a>

    </div>
  );
};

export default HeroButtons;