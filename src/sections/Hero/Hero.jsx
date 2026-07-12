import Container from "../../components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#060B16] pt-20 sm:pt-24 md:pt-28"
      role="region"
      aria-label="Hero section"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

        {/* Right Orange Glow */}
        <div
          className="absolute -right-32 top-24 h-[400px] sm:h-[500px] md:h-[650px] w-[400px] sm:w-[500px] md:w-[650px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,0,.18), transparent 70%)",
          }}
        />

        {/* Left Soft Glow */}
        <div
          className="absolute -left-44 bottom-0 h-[300px] sm:h-[350px] md:h-[450px] w-[300px] sm:w-[350px] md:w-[450px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,.04), transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">

        <div className="grid min-h-[70vh] sm:min-h-[80vh] items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[1.1fr_.9fr]">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
};

export default Hero;