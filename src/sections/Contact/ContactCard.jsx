import { motion } from "framer-motion";

const ContactCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        hover:border-orange-500/40
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-orange-500/15
        "
      >
        <Icon className="text-orange-500" size={26} />
      </div>

      <div>
        <h4 className="font-semibold">
          {item.title}
        </h4>

        <p className="text-sm text-slate-400">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactCard;