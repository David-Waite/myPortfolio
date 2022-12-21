import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollBar from "../components/ScrollBar";
import Head from "next/head";
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

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

export default function index({ projects }) {
  return (
    <div>
      <Head>
        <title>reCaptcha v3 with Next.js</title>
        <meta name="description" content="reCaptcha v3 in Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
        />
      </Head>
      <Landing />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
