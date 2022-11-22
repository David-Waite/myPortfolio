import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import styles from "../../styles/aboutWorks.module.css";
import Link from "next/link";
import { ArrowLeft } from "react-bootstrap-icons";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "characterDesign",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "characterDesign",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { characterDesigns: items[0] },
  };
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <div>
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        </div>
      );
    },
  },
};

export default function characterDesign({ characterDesigns }) {
  return (
    <div className={styles.layout}>
      <div className={styles.backLink}>
        <Link href="/characterDesigns">
          <a>
            <ArrowLeft />
          </a>
        </Link>
      </div>
      <h2 className={styles.title}>{characterDesigns.fields.title}</h2>

      <Image
        src={`https:${characterDesigns.fields.thumbnail.fields.file.url}`}
        width={
          characterDesigns.fields.thumbnail.fields.file.details.image.width
        }
        height={
          characterDesigns.fields.thumbnail.fields.file.details.image.height
        }
        alt={characterDesigns.fields.title}
      />

      <div>
        {documentToReactComponents(
          characterDesigns.fields.description,
          renderOptions
        )}
      </div>
    </div>
  );
}
