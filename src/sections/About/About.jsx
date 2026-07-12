import Container from "../../components/layout/Container";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";


const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-28 bg-[#080F1D]"
      role="region"
      aria-label="About me section"
    >
      <Container>
        <div className="grid gap-12 sm:gap-16 md:gap-20 lg:grid-cols-2 items-center">
          <AboutContent />
          <AboutCards />
        </div>
      </Container>
    </section>
  );
};

export default About;