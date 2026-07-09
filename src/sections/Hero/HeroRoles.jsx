import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "Cybersecurity Explorer",
  "Tech Writer",
];

const HeroRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-12 items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h3
          key={roles[index]}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="text-xl font-semibold tracking-wide text-orange-400 lg:text-2xl"
        >
          {roles[index]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
};

export default HeroRoles;