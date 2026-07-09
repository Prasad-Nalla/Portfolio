import { motion } from "framer-motion";
import HeroRoles from "./HeroRoles";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Orange Glow */}
        <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[80px]" />

        {/* Orange Ring */}
        <div className="absolute inset-0 rounded-full border border-orange-500/30"></div>

        {/* Image */}
        <div
          className="
            relative
            h-[320px]
            w-[320px]
            overflow-hidden
            rounded-full
            border-4
            border-white/10
            bg-[#0E1628]
            shadow-[0_25px_80px_rgba(255,107,0,.25)]
            lg:h-[420px]
            lg:w-[420px]
          "
        >
          <img
            src="/images/photo.png"
            alt="Prasad Nalla"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>

      <div className="mt-8 w-full text-center">
        <HeroRoles />
      </div>
    </motion.div>
  );
};

export default HeroImage;