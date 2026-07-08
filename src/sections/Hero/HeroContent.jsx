import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      <p className="mb-5 text-lg font-medium text-orange-400">
        Hello 👋
      </p>

      <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
        I'm <br />
        Prasad Nalla
      </h1>

      {/* Rotating text comes here */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Building scalable full-stack applications, solving
        real-world problems, exploring cybersecurity,
        and sharing technical knowledge through projects
        and articles.
      </p>

      
    </div>
  );
};

export default HeroContent;