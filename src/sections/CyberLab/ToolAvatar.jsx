const ToolAvatar = ({ logo, name, scale = "" }) => {
  const isJtr = logo.includes("jtr.png");
  const isHashcat = logo.includes("hashcat.jpg");

  let bgStyle = {};
  let isCustomBg = false;
  let paddingClass = "p-2";

  if (isJtr) {
    bgStyle = { backgroundColor: "#C51314" };
    isCustomBg = true;
    paddingClass = "p-0";
  } else if (isHashcat) {
    bgStyle = { backgroundColor: "#020611" };
    isCustomBg = true;
    paddingClass = "p-0";
  }

  return (
    <div className="group flex flex-col items-center">

      {/* Logo */}

      <div
        style={bgStyle}
        className={`
          relative
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
          cursor-pointer
          transition-all
          duration-300
          group-hover:border-orange-500
          group-hover:shadow-[0_0_25px_rgba(249,115,22,.35)]
          group-hover:-translate-y-1
        `}
      >
        <img
          src={logo}
          alt={name}
          className="
            w-full
            h-full
            object-contain
            transition-all
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Tooltip */}

      <span
        className="
          mt-3
          text-sm
          font-medium
          text-slate-400
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:text-orange-400
        "
      >
        {name}
      </span>

    </div>
  );
};

export default ToolAvatar;