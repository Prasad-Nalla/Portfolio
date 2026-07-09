import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import DeveloperPresence from "./sections/DeveloperPresence/DeveloperPresence";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DeveloperPresence />
      </main>
    </>
  );
}

export default App;