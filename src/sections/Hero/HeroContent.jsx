import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      {/* Greeting */}
      <p className="mb-4 text-base sm:text-lg font-medium tracking-wide text-orange-500">
        Hello,
      </p>

      {/* Heading */}
      <h1 className="leading-none">
        <span className="block text-3xl sm:text-4xl md:text-5xl font-medium text-white">
          I'm
        </span>

        <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
          Prasad
        </span>

        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-orange-500">
          Nalla
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
        Building scalable web applications with clean architecture,
        solving complex problems, exploring cybersecurity,
        and sharing technical knowledge through projects
        and technical articles.
      </p>

      {/* Buttons */}
      <div className="mt-8 sm:mt-10">
        <HeroButtons />
      </div>
    </motion.div>
  );
};

export default HeroContent;