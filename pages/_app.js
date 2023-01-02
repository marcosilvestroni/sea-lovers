import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "components/Menu";

import { Roboto } from "@next/font/google";
import Footer from "components/Footer";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      {/*  <Menu /> */}
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

