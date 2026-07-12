import { useState } from "react";
import Container from "../../components/layout/Container";
import FilterBar from "./FilterBar";
import SkillGrid from "./SkillGrid";
import { skills, filters } from "./skillsData";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeFilter
        );

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-28 bg-[#060B16]"
      role="region"
      aria-label="Skills and technologies section"
    >
      <Container>

        <div className="text-center mb-12 sm:mb-14">

          <p className="uppercase tracking-[0.35em] text-sm sm:text-base text-orange-500 font-semibold">
            Tech Arsenal
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
            Technologies, frameworks and cybersecurity tools
            I use to build scalable applications.
          </p>

        </div>

        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <SkillGrid skills={filteredSkills} />

      </Container>
    </section>
  );
};

export default Skills;