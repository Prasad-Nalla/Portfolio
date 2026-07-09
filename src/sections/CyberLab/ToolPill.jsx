const ToolPill = ({ tool }) => {
  return (
    <span
      className="
        rounded-full
        border
        border-orange-500/20
        bg-orange-500/10
        px-5
        py-2
        text-sm
        text-orange-300
        transition-all
        duration-300
        hover:border-orange-500
        hover:bg-orange-500/20
      "
    >
      {tool}
    </span>
  );
};

export default ToolPill;