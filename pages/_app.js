import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Unbounded } from "@next/font/google";

const font = Unbounded({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}

