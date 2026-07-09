const SkillCard = ({ skill }) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-orange-500/50
      hover:bg-white/10
      hover:shadow-[0_20px_40px_rgba(255,107,0,.15)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-orange-500/5 to-transparent" />

      <div className="relative z-10 flex items-center justify-center">
        <h3 className="text-lg font-semibold tracking-wide">
          {skill}
        </h3>
      </div>
    </div>
  );
};

export default SkillCard;