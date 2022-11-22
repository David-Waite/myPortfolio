import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";
import Illustrations from "./illustrations";

export default function index(illustrations) {
  return (
    <div>
      <ScrollBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
