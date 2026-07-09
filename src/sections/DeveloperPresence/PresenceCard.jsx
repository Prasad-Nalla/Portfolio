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
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-500/40
        hover:shadow-[0_20px_50px_rgba(255,107,0,.18)]
        ${profile.wide ? "md:col-span-2" : ""}
      `}
    >
      <div className="flex h-full flex-col items-center justify-center p-10">

        {/* Placeholder */}
        <div className="
            h-20
            w-20
            rounded-2xl
            border
            border-dashed
            border-orange-500/40
            flex
            items-center
            justify-center
            text-orange-500
            text-xl
            font-bold
        ">
          {profile.name.charAt(0)}
        </div>

        <p className="mt-8 text-xl font-semibold">
          {profile.stat}
        </p>

      </div>
    </a>
  );
};

export default PresenceCard;