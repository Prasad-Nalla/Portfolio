const ProjectBrowser = ({ image, title }) => {
  return (
    // <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101827] shadow-2xl">

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

         
        

      {/* </div> */}

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