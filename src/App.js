import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <SocialLinks />
    </div>
  );
}

export default App;
