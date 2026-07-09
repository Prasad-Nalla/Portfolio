const ProjectTech = ({ tech }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ProjectTech;