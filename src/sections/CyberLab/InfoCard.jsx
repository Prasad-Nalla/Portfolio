const InfoCard = ({ title, logo, name, subtitle }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0B1220]/70
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-500/40
        hover:shadow-[0_0_35px_rgba(249,115,22,.15)]
      "
    >
      {/* Orange Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-br
          from-orange-500/5
          via-transparent
          to-transparent
        "
      />

      <div className="relative flex items-center gap-8">

        {/* Logo */}

        <div
          className="
            w-28
            h-28
            rounded-full
            bg-[#101826]
            border
            border-white/10
            flex
            items-center
            justify-center
            overflow-hidden
            transition-all
            duration-300
            group-hover:border-orange-500
            group-hover:shadow-[0_0_25px_rgba(249,115,22,.25)]
          "
        >
          <img
            src={logo}
            alt={name}
            className="
              w-16
              h-16
              object-contain
              transition-all
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* Text */}

        <div className="flex-1">

          <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {name}
          </h3>

          {subtitle && (
            <p className="mt-2 text-lg text-orange-400">
              {subtitle}
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default InfoCard;