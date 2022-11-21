import styles from "../../styles/Projects.module.css";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "ojpc2x5wechq",
    accessToken: "sTMJE1RA1SIcEr1clV1V2Sbs76O-R_HxjGQdLQtsE4I",
  });

  const res = await client.getEntries({ content_type: "news" });

  return {
    props: {
      news: res.items,
    },
  };
}

export default function About({ news }) {
  console.log(news);
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
