import Container from "../../components/layout/Container";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-[#060B16]"
    >
      <Container>

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-orange-500">
            Tech Arsenal
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A collection of technologies, frameworks, databases, tools, and cybersecurity platforms
            that I use to build modern applications and explore secure systems.
          </p>

        </div>

        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            {...category}
          />
        ))}

      </Container>
    </section>
  );
};

export default Skills;