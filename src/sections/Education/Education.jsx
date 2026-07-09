import Container from "../../components/layout/Container";
import EducationCard from "./EducationCard";
import { education } from "./educationData";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#060B16] py-32"
    >
      <Container>

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] font-semibold text-orange-500">
            Education
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Academic Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My academic journey has provided a strong foundation in
            computer science, problem solving, and continuous learning,
            preparing me to build impactful software solutions.
          </p>

        </div>

        <div className="space-y-8">

          {education.map((item) => (
            <EducationCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Education;