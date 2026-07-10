import SkillAvatar from "./SkillAvatar";

const SkillGrid = ({ skills }) => {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-8
        justify-items-center
      "
    >
      {skills.map((skill) => (
        <SkillAvatar
          key={skill.name}
          skill={skill}
        />
      ))}
    </div>
  );
};

export default SkillGrid;