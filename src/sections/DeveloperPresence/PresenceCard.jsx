import { ArrowUpRight } from "lucide-react";

const PresenceCard = ({ profile }) => {
  const brandColor = profile.color || "#FF6B00";

  return (
    <a
      href={profile.link}
      target="_blank"
      rel="noreferrer"
      style={{
        "--brand-color": brandColor,
        "--brand-glow": `${brandColor}24`, // Hex with ~14% opacity for glow
      }}
      className="
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-white/5
        bg-[#0B1220]/80
        p-5
        text-center
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-[var(--brand-color)]
        hover:shadow-[0_12px_30px_var(--brand-glow)]
      "
    >
      {/* Tiny Arrow in the corner that appears on hover */}
      <div className="absolute right-3 top-3 text-slate-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[var(--brand-color)]">
        <ArrowUpRight size={14} />
      </div>

      {/* Compact Logo Container */}
      <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-white/5
          border
          border-white/10
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:border-[var(--brand-color)]/30
          group-hover:bg-[var(--brand-color)]/5
      ">
        {profile.logo ? (
          <img
            src={profile.logo}
            alt={`${profile.name} logo`}
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-6"
            loading="lazy"
          />
        ) : (
          <div className="text-xl font-bold text-[var(--brand-color)]">
            {profile.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Platform Name */}
      <h3 className="mt-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-white">
        {profile.name}
      </h3>

      {/* Stats */}
      <p className="mt-1 text-[11px] sm:text-xs font-medium text-orange-500/90 group-hover:text-[var(--brand-color)]">
        {profile.stat}
      </p>
    </a>
  );
};

export default PresenceCard;