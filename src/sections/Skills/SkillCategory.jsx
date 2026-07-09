import SkillCard from "./SkillCard";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-20">

      <h3 className="mb-8 text-3xl font-bold">
        {title}
      </h3>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

        {skills.map((skill) => (
          <SkillCard
            key={skill}
            skill={skill}
          />
        ))}

      </div>

    </div>
  );
};

export default SkillCategory;