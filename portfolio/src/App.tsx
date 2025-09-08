
import Navbar from "./components/NavBar";
import Hero from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GalaxyBackground from "./components/GalaxyBackground";
import Achivements from "./pages/Achivements";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
     <GalaxyBackground/>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="achivements"><Achivements/></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
