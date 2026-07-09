const stats = [
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "500+",
    label: "Problems Solved",
  },
  {
    number: "Top 5%",
    label: "TryHackMe",
  },
  {
    number: "3+",
    label: "Years Learning",
  },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">

      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#0E1628]
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-orange-500/40
          "
        >
          <h3 className="text-4xl font-bold text-orange-500">
            {item.number}
          </h3>

          <p className="mt-3 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
};

export default AboutStats;