import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: {
      projects: res.items,
    },
  };
}

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
