import Container from "../../components/layout/Container";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { contactInfo } from "./contactData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 bg-[#080F1D]"
      role="region"
      aria-label="Contact section"
    >
      <Container>

        <div
          className="
            grid
            gap-12
            sm:gap-16
            md:gap-20
            lg:grid-cols-2
            items-center
          "
        >

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.35em] text-sm sm:text-base text-orange-500 font-semibold">
              Contact
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Let's Build
              <br />
              Something Great
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
              Whether it's an internship, freelance project,
              collaboration, or just a tech conversation,
              I'd love to connect with you.
            </p>

            <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-5">
              {contactInfo.map((item) => (
                <ContactCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>

          </div>

          {/* Right */}

          <ContactForm />

        </div>

      </Container>
    </section>
  );
};

export default Contact;