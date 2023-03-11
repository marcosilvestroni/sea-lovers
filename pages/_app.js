import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";
import { Roboto } from "@next/font/google";
import Text from "components/Text";
import Header from "components/Header";
import NextNProgress from "nextjs-progressbar";

const font = Roboto({ subsets: ["latin"], weight: "400" });

const App = ({ Component, pageProps }) => {
  return (
    <main className={font.className}>
      <NextNProgress color="#fb7838" />
      <Header />
      <Component {...pageProps} />
    </main>
  );
};

export default appWithTranslation(App);

