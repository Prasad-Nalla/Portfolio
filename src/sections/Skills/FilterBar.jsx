const FilterBar = ({
  filters,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-14">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-full transition-all duration-300 ${
            activeFilter === filter
              ? "bg-orange-500 text-white"
              : "bg-white/5 border border-white/10 hover:border-orange-500"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;