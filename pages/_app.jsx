import "@/styles/globals.css";
import { useState, createContext } from "react";
import Footer from "@/components/Footer";

export const DarkModeFontContext = createContext({});

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState("");
  return (
    <DarkModeFontContext.Provider
      value={{ isDarkMode, setIsDarkMode, selectedFont, setSelectedFont }}
    >
      <Component {...pageProps} />
      <Footer />
    </DarkModeFontContext.Provider>
  );
}
