import Container from "../../components/layout/Container";
import InfoCard from "./InfoCard";
import ToolAvatar from "./ToolAvatar";
import InternshipCard from "./InternshipCard";
import { cyberData } from "./cyberData";
import { ShieldCheck } from "lucide-react";

const CyberLab = () => {
  return (
    <section
      id="cyber-lab"
      className="relative pt-16 pb-20 bg-[#060B16] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[220px]" />

      <Container>

        {/* ================= Heading ================= */}

        <div className="relative text-center mb-12">

          <div className="flex justify-center mb-5">
            <ShieldCheck
              size={70}
              strokeWidth={1.8}
              className="text-orange-500"
            />
          </div>

          <p className="uppercase tracking-[0.45em] text-orange-500 font-semibold">
            Cyber Lab
          </p>

          <h2 className="mt-4 text-6xl md:text-7xl font-bold text-white">
            Cybersecurity
          </h2>

          <p className="mt-5 text-lg md:text-xl text-slate-400">
            Penetration Testing
            <span className="mx-3 text-orange-500">•</span>
            CTF
            <span className="mx-3 text-orange-500">•</span>
            Security Research
          </p>

        </div>

        {/* ================= Platform ================= */}

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-6">

            <InfoCard
              title={cyberData.platform.title}
              logo={cyberData.platform.logo}
              name={cyberData.platform.value}
              subtitle={cyberData.platform.subtitle}
            />

            <InfoCard
              title={cyberData.environment.title}
              logo={cyberData.environment.logo}
              name={cyberData.environment.value}
            />

          </div>

        </div>

        {/* ================= Toolkit ================= */}

        <div className="max-w-6xl mx-auto mt-8">

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-[#0B1220]/70
              backdrop-blur-xl
              p-8
            "
          >

            <div className="text-center mb-8">

              <p className="uppercase tracking-[0.3em] text-orange-500 text-sm font-semibold">
                Skillset
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                Security Toolkit
              </h3>

              <p className="mt-3 text-slate-400">
                Frequently used tools for penetration testing and security assessments.
              </p>

            </div>

            <div className="flex flex-wrap justify-center gap-8">

              {cyberData.toolkit.map((tool) => (

                <ToolAvatar
                  key={tool.name}
                  logo={tool.logo}
                  name={tool.name}
                  scale={tool.scale}
                />

              ))}

            </div>

          </div>

        </div>

        {/* ================= Internships ================= */}

        <div className="max-w-6xl mx-auto mt-8">

          <div className="grid md:grid-cols-2 gap-6">

            {cyberData.internships.map((item) => (

              <InternshipCard
                key={item.title}
                logo={item.logo}
                title={item.title}
                organization={item.organization}
              />

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
};

export default CyberLab;