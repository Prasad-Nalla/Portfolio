import Container from "../../components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#060B16] pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Right Orange Glow */}
        <div
          className="absolute -right-32 top-24 h-[650px] w-[650px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,0,.18), transparent 70%)",
          }}
        />

        {/* Left Soft Glow */}
        <div
          className="absolute -left-44 bottom-0 h-[450px] w-[450px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,.04), transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">

        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
};

export default Hero;