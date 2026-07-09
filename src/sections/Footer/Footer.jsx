import Container from "../../components/layout/Container";
import { footerLinks } from "./footerData";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#060B16] py-12">
      <Container>
        <div className="flex flex-col items-center text-center">

          <h2 className="text-3xl font-bold">
            N.G.S.R.S. Prasad
          </h2>

          <p className="mt-3 max-w-xl text-slate-400">
            Building secure & scalable digital solutions with
            Full Stack Development and Cybersecurity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-5">

            {footerLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-orange-500
                    hover:bg-orange-500
                    hover:text-white
                  "
                >
                  <Icon />
                </a>
              );
            })}

          </div>

          <div className="mt-10 h-px w-full bg-white/10" />

          <p className="mt-8 text-sm text-slate-500">
            © {new Date().getFullYear()} N.G.S.R.S. Prasad.
            Crafted with React, Tailwind CSS & ❤️.
          </p>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;