const SkillAvatar = ({ skill }) => {
  return (
    <div className="group relative flex justify-center">

      {/* Tooltip */}
      <div
        className="
          absolute
          -top-12
          left-1/2
          -translate-x-1/2
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          pointer-events-none
          z-20
        "
      >
        <div className="bg-[#111827] text-white border border-orange-500 rounded-lg px-3 py-1 text-sm whitespace-nowrap">
          {skill.name}
        </div>

        <div className="mx-auto -mt-1 h-2 w-2 rotate-45 bg-[#111827] border-r border-b border-orange-500"></div>
      </div>

      {/* Avatar */}
      <div
        className="
          w-24
          h-24
          rounded-full
          overflow-hidden
          bg-[#101826]
          border-2
          border-black
          transition-all
          duration-300
          hover:border-orange-500
          hover:shadow-[0_0_25px_rgba(249,115,22,.45)]
          hover:-translate-y-1
        "
      >
        <img
          src={`/logos/${skill.logo}`}
          alt={skill.name}
          className="
            w-full
            h-full
            object-cover
            object-center
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

    </div>
  );
};

export default SkillAvatar;