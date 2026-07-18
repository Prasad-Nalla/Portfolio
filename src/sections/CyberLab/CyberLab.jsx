import { useState } from "react";
import { ShieldCheck } from "lucide-react";

import Container from "../../components/layout/Container";
import InfoCard from "./InfoCard";
import ToolAvatar from "./ToolAvatar";
import InternshipCard from "./InternshipCard";
import { cyberData } from "./cyberData";

const CyberLab = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="cyber-lab"
      className="relative py-16 sm:py-24 md:py-32 bg-[#060B16] overflow-hidden"
      role="region"
      aria-label="Cybersecurity projects and tools section"
    >
      {/* Background Glow */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] sm:w-[600px] md:w-[700px] h-[500px] sm:h-[600px] md:h-[700px] rounded-full bg-orange-500/10 blur-[150px] sm:blur-[180px] md:blur-[220px]"
        aria-hidden="true"
      />

      <Container>
        {/* ================= Heading ================= */}

        <div className="relative text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-5">
            <ShieldCheck
              size={50}
              strokeWidth={1.8}
              className="text-orange-500 sm:w-[70px] sm:h-[70px]"
              aria-hidden="true"
            />
          </div>

          <p className="uppercase tracking-[0.35em] text-sm sm:text-base text-orange-500 font-semibold">
            Cyber Lab
          </p>

          <h2 className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Cybersecurity
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-slate-400 leading-6 sm:leading-8">
            Penetration Testing
            <span className="mx-2 sm:mx-3 text-orange-500" aria-hidden="true">•</span>
            CTF
            <span className="mx-2 sm:mx-3 text-orange-500" aria-hidden="true">•</span>
            Security Research
          </p>
        </div>

        {/* ================= Platform ================= */}

        <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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

        <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0B1220]/70 backdrop-blur-xl p-6 sm:p-8">
            {/* Heading */}

            <div className="text-center mb-8">
              <p className="uppercase tracking-[0.3em] text-orange-500 text-xs sm:text-sm font-semibold">
                Skillset
              </p>

              <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-white">
                Security Toolkit
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-400">
                Frequently used tools for penetration testing and security
                assessments.
              </p>
            </div>

            {/* Main Tools */}

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {cyberData.toolkit.map((tool) => (
                <ToolAvatar
                  key={tool.name}
                  logo={tool.logo}
                  name={tool.name}
                  scale={tool.scale}
                />
              ))}
            </div>

            {/* Expand Button */}

            <div className="flex justify-center mt-8 sm:mt-10">
              <button
                onClick={() => setShowMore(!showMore)}
                className="
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                  text-sm
                  sm:text-base
                  text-orange-400
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-orange-500
                  hover:text-white
                  hover:scale-105
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-500
                  focus:ring-offset-2
                  focus:ring-offset-transparent
                  active:scale-95
                "
                aria-expanded={showMore}
                aria-label={showMore ? "Show less cybersecurity tools" : "Show complete cybersecurity toolkit"}
              >
                {showMore
                  ? "View Less ▲"
                  : "View Complete Toolkit ▼"}
              </button>
            </div>

            {/* More Tools */}

            {showMore && (
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
                {cyberData.moreTools.map((tool) => (
                  <ToolAvatar
                    key={tool.name}
                    logo={tool.logo}
                    name={tool.name}
                    scale={tool.scale}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= Internships ================= */}

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {cyberData.internships.map((item) => (
              <InternshipCard
                key={item.title}
                logo={item.logo}
                title={item.title}
                organization={item.organization}
                certificate={item.certificate}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CyberLab;