const ProjectBrowser = ({ image, title }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101827] shadow-2xl w-full flex flex-col">
      {/* Browser Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-slate-900/50">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]"></div>
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="h-3 w-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="rounded-md bg-slate-950/40 px-3 py-1 text-xs text-slate-500 font-mono select-none">
          {title.toLowerCase().replace(/\s+/g, '')}.dev
        </div>
        <div className="w-12"></div> {/* Spacer for symmetry */}
      </div>

      {image ? (
        <div className="relative h-[200px] sm:h-[280px] md:h-[350px] w-full bg-[#080F1D] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex h-[200px] sm:h-[280px] md:h-[350px] flex-col items-center justify-center bg-gradient-to-br from-[#101826] to-[#0B1220]">
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