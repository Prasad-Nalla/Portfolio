import Container from "../../components/layout/Container";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";


const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-[#080F1D]"
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <AboutContent />
          <AboutCards />
        </div>
      </Container>
    </section>
  );
};

export default About;