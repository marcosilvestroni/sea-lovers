import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";
import { Roboto } from "@next/font/google";
import Text from "../components/Text";
import Header from "../components/Header";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

const font = Roboto({ subsets: ["latin"], weight: "400" });

const App = ({ Component, pageProps }) => {
  return (
    <main className={font.className}>
      <NextNProgress color="#fb7838" />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
};

export default appWithTranslation(App);

