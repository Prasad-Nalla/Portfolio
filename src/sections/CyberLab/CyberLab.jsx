import Container from "../../components/layout/Container";
import CyberCard from "./CyberCard";
import ToolPill from "./ToolPill";
import { cyberCards, securityTools } from "./cyberData";

const CyberLab = () => {
  return (
    <section
      id="cyber-lab"
      className="bg-[#060B16] py-32"
    >
      <Container>

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] font-semibold text-orange-500">
            Cyber Lab
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Practical Security Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400 leading-8">
            Exploring cybersecurity through hands-on labs,
            penetration testing practice, vulnerability assessment,
            and continuous learning.
          </p>

        </div>

        {/* Top Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {cyberCards.slice(0, 2).map((card) => (
            <CyberCard
              key={card.title}
              card={card}
            />
          ))}

        </div>

        {/* Toolkit */}

        <div
          className="
            my-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            backdrop-blur-xl
          "
        >
          <h3 className="mb-8 text-3xl font-bold">
            Security Toolkit
          </h3>

          <div className="flex flex-wrap gap-4">
            {securityTools.map((tool) => (
              <ToolPill
                key={tool}
                tool={tool}
              />
            ))}
          </div>

        </div>

        {/* Bottom Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {cyberCards.slice(2).map((card) => (
            <CyberCard
              key={card.title}
              card={card}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default CyberLab;