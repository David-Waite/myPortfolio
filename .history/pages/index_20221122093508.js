import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";
import { createClient } from "contentful";

export default function Home(props) {
  console.log(props.illustrations);
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

export function getStaticProps() {
  return {
    props: {
      illustrations: "hi",
    },
  };
}
