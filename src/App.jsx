import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;