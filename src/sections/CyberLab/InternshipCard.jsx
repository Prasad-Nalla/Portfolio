const InternshipCard = ({ logo, title, organization }) => {
  const isPalo = logo.includes("palo.png");
  const isEdu = logo.includes("edu.png");

  let bgStyle = {};
  let isCustomBg = false;
  let paddingClass = "p-2";
  let imgSizeClass = "w-14 h-14";

  if (isPalo) {
    bgStyle = { backgroundColor: "#FFFFFF" };
    isCustomBg = true;
    paddingClass = "p-0";
    imgSizeClass = "w-full h-full";
  } else if (isEdu) {
    bgStyle = { backgroundColor: "#0D619F" };
    isCustomBg = true;
    paddingClass = "p-0";
    imgSizeClass = "w-full h-full";
  }

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
      {/* Hover Glow */}
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

      <div className="relative flex items-center gap-6">

        {/* Logo */}

        <div
          style={bgStyle}
          className={`
            w-24
            h-24
            rounded-full
            ${isCustomBg ? "" : "bg-[#101826]"}
            border
            border-white/10
            overflow-hidden
            flex
            items-center
            justify-center
            ${paddingClass}
            transition-all
            duration-300
            group-hover:border-orange-500
            group-hover:shadow-[0_0_25px_rgba(249,115,22,.25)]
          `}
        >
          <img
            src={logo}
            alt={title}
            className={`
              ${imgSizeClass}
              object-contain
              transition-all
              duration-300
              group-hover:scale-110
            `}
          />
        </div>

        {/* Text */}

        <div className="flex-1">

          <p className="uppercase tracking-[0.3em] text-orange-500 text-xs font-semibold">
            Virtual Internship
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white leading-tight">
            {title}
          </h3>

          <p className="mt-2 text-slate-400">
            {organization}
          </p>

        </div>

      </div>
    </div>
  );
};

export default InternshipCard;