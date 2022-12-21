import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollBar from "../components/ScrollBar";
import Head from "next/head";
import Script from "next/script";
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
      <Script src="https://third-party-script.js"></Script>
      <title>title</title>
      <meta name="description" content="reCaptcha v3 in Next.js" />
      <link rel="icon" href="/favicon.ico" />

      <Landing />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
