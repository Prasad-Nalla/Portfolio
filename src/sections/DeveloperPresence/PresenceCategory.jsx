import PresenceCard from "./PresenceCard";

const PresenceCategory = ({ title, profiles }) => {
  return (
    <div className="mb-20">

      <h3 className="mb-8 text-3xl font-bold">
        {title}
      </h3>

      <div className="grid gap-6 md:grid-cols-2">

        {profiles.map((profile) => (
          <PresenceCard
            key={profile.name}
            profile={profile}
          />
        ))}

      </div>

    </div>
  );
};

export default PresenceCategory;