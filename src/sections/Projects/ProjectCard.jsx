import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectBrowser from "./ProjectBrowser";
import ProjectTech from "./ProjectTech";

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`
        grid
        items-center
        gap-16
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Browser Preview */}
      <ProjectBrowser
        image={project.image}
        title={project.title}
      />

      {/* Content */}
      <div>

        <p className="text-sm uppercase tracking-[0.35em] font-semibold text-orange-500">
          Featured Project
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          {project.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        <ProjectTech tech={project.tech} />

        <div className="mt-10 flex flex-wrap gap-5">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-orange-500
              px-7
              py-3
              font-medium
              transition-all
              duration-300
              hover:bg-orange-600
            "
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              px-7
              py-3
              font-medium
              transition-all
              duration-300
              hover:border-orange-500
              hover:text-orange-500
            "
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;