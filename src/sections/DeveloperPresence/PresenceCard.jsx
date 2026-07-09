const PresenceCard = ({ profile }) => {
  return (
    <a
      href={profile.link}
      target="_blank"
      rel="noreferrer"
      className="
        group
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
        hover:shadow-[0_20px_40px_rgba(255,107,0,.18)]
      "
    >
      <h3 className="text-2xl font-bold transition group-hover:text-orange-500">
        {profile.name}
      </h3>

      <p className="mt-4 text-slate-400">
        {profile.stats}
      </p>

      <div className="mt-8 text-sm font-semibold text-orange-500">
        View Profile →
      </div>
    </a>
  );
};

export default PresenceCard;