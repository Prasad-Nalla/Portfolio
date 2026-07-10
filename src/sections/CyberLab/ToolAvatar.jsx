const ToolAvatar = ({ logo, name, scale = "" }) => {
  return (
    <div className="group flex flex-col items-center">

      {/* Logo */}

      <div
        className="
          relative
          w-24
          h-24
          rounded-full
          bg-[#101826]
          border
          border-white/10
          overflow-hidden
          flex
          items-center
          justify-center
          cursor-pointer
          transition-all
          duration-300
          group-hover:border-orange-500
          group-hover:shadow-[0_0_25px_rgba(249,115,22,.35)]
          group-hover:-translate-y-1
        "
      >
        <img
          src={logo}
          alt={name}
          className={`
            w-14
            h-14
            object-contain
            transition-all
            duration-300
            ${scale}
            group-hover:scale-110
          `}
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