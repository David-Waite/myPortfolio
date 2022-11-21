import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";

export default function Home({ projects }) {
  return (
    <div>
      <ScrollBar />
      <div>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
