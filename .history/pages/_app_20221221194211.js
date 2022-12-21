import "../styles/globals.css";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Index from ".";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
      <Analytics />
    </Layout>
  );
}

export default MyApp;
