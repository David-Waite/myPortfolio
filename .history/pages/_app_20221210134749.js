import "../styles/globals.css";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Index from ".";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.EMAIL_ADDRESS}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Layout>
        <Component {...pageProps} />;
        <Analytics />
      </Layout>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
