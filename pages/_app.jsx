import "@/styles/globals.css";

import Footer from "@/components/Footer";
import { DarkModeFontProvider } from "@/context/dark-mode-font-context";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeFontProvider>
      <Component {...pageProps} />
      <Footer />
    </DarkModeFontProvider>
  );
}
