const CyberCard = ({ title, children }) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-orange-500/40
        hover:shadow-[0_0_30px_rgba(249,115,22,.15)]
      "
    >
      <h3 className="text-xl font-semibold mb-6">
        {title}
      </h3>

      {children}
    </div>
  );
};

export default CyberCard;