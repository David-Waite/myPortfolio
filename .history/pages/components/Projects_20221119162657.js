import styles from "../../styles/Projects.module.css";

import { createClient } from "contentful";

const client = createClient({
  space: "owkzs2t0bbp3",
  accessToken: "YUoyuGqodIoHEkZ9cf9ikbrWnUtUg986INi274OwxGg",
});

async function getPage(GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    "fields.slug": params.slug,
    content_type: params.pageContentType,
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}

export default function About(page) {
  console.log(page);
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
