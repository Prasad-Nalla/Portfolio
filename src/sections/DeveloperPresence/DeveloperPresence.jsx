import Container from "../../components/layout/Container";
import PresenceCategory from "./PresenceCategory";
import { presenceData } from "./presenceData";

const DeveloperPresence = () => {
  return (
    <section
      id="developer-presence"
      className="py-28 bg-[#060B16]"
    >
      <Container>

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-orange-500">
            Developer Presence
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Learning, Building & Sharing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Beyond building applications, I actively solve coding challenges,
            contribute projects, explore cybersecurity, and share technical
            knowledge with the developer community.
          </p>

        </div>

        {presenceData.map((category) => (
          <PresenceCategory
            key={category.title}
            {...category}
          />
        ))}

      </Container>
    </section>
  );
};

export default DeveloperPresence;