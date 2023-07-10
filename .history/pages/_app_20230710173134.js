import "../styles/globals.css";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <body>
      <Layout>
        <Component {...pageProps} />;
        <Analytics />
      </Layout>
    </body>
  );
}

export default MyApp;
