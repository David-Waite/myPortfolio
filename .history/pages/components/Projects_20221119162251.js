import styles from "../../styles/Projects.module.css";

import { createClient } from "contentful";

const client = createClient({
  space: CF_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: CF_DELIVERY_ACCESS_TOKEN, // delivery API key for the space \
});

type;
GetPageParams = {
  pageContentType: string,
  slug: string,
  locale: string,
};

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

export default function About({ projects }) {
  console.log(projects);
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
