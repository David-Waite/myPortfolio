import styles from "../../styles/Projects.module.css";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: "1kzidm3gwqzg",
    accessToken: "PmebU15CMuS8OfQKw7Le6xPQ4sr8tpqIT88cxMD5oR0",
  });

  const res = await client.getEntries({ content_type: "projects" });

  return {
    props: {
      projects: res.items,
    },
  };
}

export default function About({ projects }) {
  console.log(process.env.CONTENTFUL_SPACE_ID);
  console.log("hi" + projects);
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
