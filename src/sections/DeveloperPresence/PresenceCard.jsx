const PresenceCard = ({ profile }) => {
  return (
    <a
      href={profile.link}
      target="_blank"
      rel="noreferrer"
      className={`
        group
        rounded-3xl
        border
        border-white/10
        bg-[#0E1628]/60
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-orange-500/40
        hover:bg-[#131f36]/80
        hover:shadow-[0_20px_50px_rgba(255,107,0,.15)]
        ${profile.wide ? "md:col-span-2" : ""}
      `}
    >
      <div className="flex h-full flex-col items-center justify-center p-8 sm:p-10">

        {/* Logo Container */}
        <div className="
            h-20
            w-20
            rounded-2xl
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-orange-500/30
            group-hover:bg-orange-500/5
            shadow-inner
        ">
          {profile.logo ? (
            <img
              src={profile.logo}
              alt={`${profile.name} logo`}
              className="h-11 w-11 object-contain transition-transform duration-500 group-hover:rotate-6"
              loading="lazy"
            />
          ) : (
            <div className="text-orange-500 text-2xl font-bold">
              {profile.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Platform Name */}
        <h3 className="mt-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-400 font-semibold transition-colors duration-300 group-hover:text-orange-400">
          {profile.name}
        </h3>

        {/* Statistics */}
        <p className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
          {profile.stat}
        </p>

      </div>
    </a>
  );
};

export default PresenceCard;