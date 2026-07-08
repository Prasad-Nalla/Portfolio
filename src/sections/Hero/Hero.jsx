import Container from "../../components/layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;