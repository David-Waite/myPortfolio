import styles from "../../styles/Projects.module.css";
import { createClient } from "contentful";

const client = createClient({
  space: "s6pr8mg84b2l",
  accessToken: "U6YM_BvOPUzC_hpF-Ab3q36evQTpVjQSZwTRVlLDrCc",
});

type GetPageParams = {
  pageContentType: string,
  slug: string,
  locale: string,
};

async function getPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    "fields.slug": params.slug,
    content_type: "page",
    "fields.content.sys.contentType.sys.id": params.pageContentType,
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}

export async function getStaticProps() {
  const client = createClient({
    space: "s6pr8mg84b2l",
    accessToken: "U6YM_BvOPUzC_hpF-Ab3q36evQTpVjQSZwTRVlLDrCc",
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
