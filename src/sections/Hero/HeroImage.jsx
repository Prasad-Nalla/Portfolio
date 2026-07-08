import HeroRoles from "./HeroRoles";

const HeroImage = () => {
  return (
    <div className="flex flex-col items-center lg:items-end">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative h-[380px] w-[380px] overflow-hidden rounded-full border border-white/10">
           <img
    src="/images/photo.jpg"
    alt="Prasad Nalla"
    className="h-full w-full object-cover"
/>
        </div>
      </div>

      <div className="mt-8">
        <HeroRoles />
      </div>
    </div>
  );
};

export default HeroImage;