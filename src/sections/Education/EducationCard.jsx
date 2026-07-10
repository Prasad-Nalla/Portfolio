import { motion } from "framer-motion";

const EducationCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500/40
        hover:shadow-[0_20px_60px_rgba(255,107,0,.15)]
      "
    >
      <div className="flex items-start gap-5">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-orange-500/15
          "
        >
          <Icon
            size={30}
            className="text-orange-500"
          />
        </div>
<div>
  <h3 className="text-2xl font-bold">
    {item.title}
  </h3>

  <p className="mt-2 text-orange-400 font-medium">
    {item.degree}
  </p>

  <p className="mt-5 text-slate-300">
    {item.institute}
  </p>

  <div className="mt-6 flex flex-wrap gap-4">
    <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
      {item.duration}
    </span>

    <span className="rounded-full bg-orange-500/15 px-4 py-2 text-sm font-medium text-orange-300">
      {item.score}
    </span>
  </div>

  <div className="mt-8">
    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
      Relevant Coursework
    </h4>

    <div className="flex flex-wrap gap-3">
      {item.coursework.map((course) => (
        <span
          key={course}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            text-slate-300
            transition-all
            duration-300
            hover:border-orange-500/40
            hover:text-orange-300
          "
        >
          {course}
        </span>
      ))}
    </div>
  </div>
</div>
       
        

      </div>
    </motion.div>
  );
};

export default EducationCard;