import HeroRoles from "./HeroRoles";
const HeroImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative h-[420px] w-[420px] rounded-full border border-orange-500/30 bg-orange-500/10">
      </div>
      <HeroRoles />
    </div>
  );
};

export default HeroImage;