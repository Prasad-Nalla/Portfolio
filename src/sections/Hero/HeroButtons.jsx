const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        className="rounded-xl bg-orange-500 px-7 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400"
      >
        View Projects
      </button>

      <button
        className="rounded-xl border border-white/20 px-7 py-3 text-white transition-all duration-300 hover:border-orange-400 hover:bg-white/5"
      >
        Download Resume
      </button>
    </div>
  );
};

export default HeroButtons;