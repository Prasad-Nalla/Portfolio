import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import DeveloperPresence from "./sections/DeveloperPresence/DeveloperPresence";
import CyberLab from "./sections/CyberLab/CyberLab";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Education from "./sections/Education/Education";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <DeveloperPresence />
        <CyberLab />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;