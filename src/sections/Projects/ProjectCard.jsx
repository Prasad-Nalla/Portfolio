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
        gap-8
        sm:gap-12
        lg:gap-16
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

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold text-orange-500">
          Featured Project
        </p>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">
          {project.title}
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
          {project.description}
        </p>

        <ProjectTech tech={project.tech} />

        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-5">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              sm:gap-3
              rounded-full
              bg-orange-500
              px-5
              sm:px-7
              py-2.5
              sm:py-3
              text-sm
              sm:text-base
              font-medium
              transition-all
              duration-300
              hover:bg-orange-600
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
              focus:ring-offset-2
              focus:ring-offset-transparent
              active:scale-95
            "
            aria-label={`Visit ${project.title} live demo`}
          >
            <FaExternalLinkAlt aria-hidden="true" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              sm:gap-3
              rounded-full
              border
              border-white/15
              px-5
              sm:px-7
              py-2.5
              sm:py-3
              text-sm
              sm:text-base
              font-medium
              transition-all
              duration-300
              hover:border-orange-500
              hover:text-orange-500
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
              focus:ring-offset-2
              focus:ring-offset-transparent
              active:scale-95
            "
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;