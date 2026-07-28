import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";
import { DM_Serif_Display, Nunito_Sans } from "next/font/google";
import Header from "../components/Header";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import nextI18NextConfig from "../next-i18next.config";

const titleFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  adjustFontFallback: false,
  variable: "--font-body",
});

const App = ({ Component, pageProps }) => {
  return (
    <main className={`${titleFont.variable} ${bodyFont.variable}`}>
      <NextNProgress color="#fb7838" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
};

export default appWithTranslation(App, nextI18NextConfig);

