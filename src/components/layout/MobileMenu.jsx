import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Cyber Lab", href: "#cyber-lab" },
  { name: "Contact", href: "#contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:text-orange-500 transition-colors"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <FiX size={24} aria-hidden="true" />
        ) : (
          <FiMenu size={24} aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 md:hidden"
        >
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600">
              Resume
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
