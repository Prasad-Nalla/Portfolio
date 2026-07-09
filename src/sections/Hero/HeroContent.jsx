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
      <p className="mb-4 text-lg font-medium tracking-wide text-orange-500">
        Hello,
      </p>

      {/* Heading */}
      <h1 className="leading-none">
        <span className="block text-4xl font-medium text-white md:text-5xl">
          I'm
        </span>

        <span className="mt-2 block text-6xl font-bold text-white md:text-7xl lg:text-8xl">
          Prasad
        </span>

        <span className="block text-6xl font-bold text-orange-500 md:text-7xl lg:text-8xl">
          Nalla
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Building scalable web applications with clean architecture,
        solving complex problems, exploring cybersecurity,
        and sharing technical knowledge through projects
        and technical articles.
      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>
    </motion.div>
  );
};

export default HeroContent;