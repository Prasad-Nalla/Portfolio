import Container from "../../components/layout/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#080F1D] py-32"
    >
      <Container>

        {/* Heading */}

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-orange-500">
            Projects
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight">
            Crafting Products with
            <span className="text-orange-500">
              {" "}Code, AI & Security
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A selection of projects that demonstrate my experience in
            full-stack development, artificial intelligence, and
            cybersecurity through practical, real-world applications.
          </p>

        </div>

        {/* Projects */}

        <div className="space-y-40">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Projects;