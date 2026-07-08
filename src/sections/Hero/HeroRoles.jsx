import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "Cybersecurity Explorer",
  "Tech Writer",
];

export default function HeroRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-6 h-14 overflow-hidden">
      <motion.h2
        key={roles[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="absolute text-3xl font-semibold text-orange-400 lg:text-4xl"
      >
        {roles[index]}
      </motion.h2>
    </div>
  );
}