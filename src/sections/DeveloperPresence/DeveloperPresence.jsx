import Container from "../../components/layout/Container";
import PresenceCard from "./PresenceCard";
import { profiles } from "./presenceData";

const DeveloperPresence = () => {
  return (
    <section
      id="developer-presence"
      className="py-32 bg-[#080F1D]"
    >
      <Container>

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-orange-500 font-semibold">
            Developer Presence
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold">
            Building Beyond Projects
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 sm:gap-6">

          {profiles.map((profile) => (
            <PresenceCard
              key={profile.name}
              profile={profile}
            />
          ))}

        </div>

        {/* ================= Live Activity Showcase ================= */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Live Activity Showcase
            </h3>
            <p className="mt-2.5 text-sm sm:text-base text-slate-400">
              Real-time statistics directly from coding and security platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* LeetCode Stats Card */}
            <a
              href="https://leetcode.com/u/Prasad_Nalla/"
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-white/5
                bg-[#0B1220]/60
                p-6
                sm:p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-orange-500/30
                hover:shadow-[0_12px_30px_rgba(249,115,22,.08)]
              "
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider text-orange-500 mb-6 group-hover:text-white transition-colors duration-300">
                LeetCode Live Statistics
              </h4>
              <div className="w-full flex justify-center">
                <img
                  src="https://leetcard.jacoblin.cool/Prasad_Nalla?theme=dark&font=Inter"
                  alt="Prasad Nalla's LeetCode Stats"
                  className="w-full max-w-sm h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </a>

            {/* TryHackMe Stats Card */}
            <a
              href="https://tryhackme.com/p/PrasadNalla"
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-white/5
                bg-[#0B1220]/60
                p-6
                sm:p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-[#98E43B]/30
                hover:shadow-[0_12px_30px_rgba(152,228,59,.08)]
              "
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#98E43B] mb-6 group-hover:text-white transition-colors duration-300">
                TryHackMe Live Badge
              </h4>
              <div className="w-full flex items-center justify-center h-full">
                <img
                  src="https://tryhackme-badges.s3.amazonaws.com/PrasadNalla.png"
                  alt="Prasad Nalla's TryHackMe Stats"
                  className="w-full max-w-sm h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default DeveloperPresence;