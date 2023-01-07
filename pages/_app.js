import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Roboto } from "@next/font/google";
import Footer from "components/Footer";
import Text from "components/Text";
import Header from "components/Header";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

