import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import styles from "../styles/index.module.css";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: {
      projects: res.items,
    },
  };
}

export default function index({ projects }) {
  return (
    <div>
      <div className={styles.outerContainter}>
        <div className={styles.box}></div>
        <dialog className={styles.dialogContainer} open>
          <p>Greetings, one and all!</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>
      </div>

      <Landing />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
