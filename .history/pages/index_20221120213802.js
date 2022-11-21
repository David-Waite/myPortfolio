import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
      ihi
      <ScrollBar />
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </div>
  );
}
