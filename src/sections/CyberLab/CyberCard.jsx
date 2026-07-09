const CyberCard = ({ card }) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-orange-500/40
      "
    >
      <h3 className="text-2xl font-bold">
        {card.title}
      </h3>

      {card.value && (
        <p className="mt-6 text-lg text-orange-400">
          {card.value}
        </p>
      )}

      {card.items && (
        <ul className="mt-6 space-y-3 text-slate-300">
          {card.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CyberCard;