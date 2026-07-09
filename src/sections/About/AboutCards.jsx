import {
  Code2,
  Shield,
  PenSquare,
  Brain,
} from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Building scalable web applications using MERN Stack and modern web technologies.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Solved 500+ coding problems while strengthening algorithms and data structures.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Top 5% on TryHackMe with hands-on experience in offensive and defensive security.",
  },
  {
    icon: PenSquare,
    title: "Technical Writing",
    desc: "Published technical articles and programming content on GeeksforGeeks.",
  },
];

const AboutCards = () => {
  return (
    <div className="grid gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-[#0E1628] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-[#131f36]"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Icon size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCards;