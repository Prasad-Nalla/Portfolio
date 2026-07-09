const ProjectBrowser = ({ image, title }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101827] shadow-2xl">

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className="rounded-full bg-white/5 px-4 py-1 text-xs text-slate-400">
          localhost:5173
        </div>

      </div>

      {image ? (
        <img
          src={image}
          alt={title}
          className="h-[350px] w-full object-cover"
        />
      ) : (
        <div className="flex h-[350px] flex-col items-center justify-center bg-gradient-to-br from-[#101827] to-[#0B1220]">

          <div className="text-6xl font-bold text-orange-500 opacity-20">
            {"</>"}
          </div>

          <h3 className="mt-6 text-3xl font-bold">
            {title}
          </h3>

          <p className="mt-2 text-slate-500">
            Screenshot Coming Soon
          </p>

        </div>
      )}

    </div>
  );
};

export default ProjectBrowser;