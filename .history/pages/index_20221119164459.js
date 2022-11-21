import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { createClient } from "contentful";

export default function Home({ projects }) {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
