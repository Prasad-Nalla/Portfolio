import { useState, useEffect } from "react";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Cyber Lab", href: "#cyber-lab" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-900/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-white hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="Prasad - Home"
          >
            Prasad<span className="text-orange-500" aria-hidden="true">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1"
              >
                {item.name}

                <span 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" 
                  aria-hidden="true"
                ></span>
              </a>
            ))}
          </nav>

          {/* Resume Button - Desktop */}
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    hidden
    md:inline-flex
    items-center
    gap-2
    rounded-xl
    bg-orange-500
    px-5
    py-2.5
    font-medium
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:bg-orange-600
    hover:shadow-[0_0_20px_rgba(249,115,22,.4)]
  "
>
  <Download size={18} />
  Resume
</a>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;