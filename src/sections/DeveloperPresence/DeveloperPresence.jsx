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

          <h2 className="mt-5 text-5xl font-bold">
            Building Beyond Projects
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {profiles.map((profile) => (
            <PresenceCard
              key={profile.name}
              profile={profile}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default DeveloperPresence;