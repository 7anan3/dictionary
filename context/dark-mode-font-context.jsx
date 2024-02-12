import { createContext, useContext, useState } from "react";

const DarkModeFontContext = createContext({});

export function DarkModeFontProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFont, setSelectedFont] = useState("font-serif");

  return (
    <DarkModeFontContext.Provider
      value={{ isDarkMode, setIsDarkMode, selectedFont, setSelectedFont }}
    >
      {children}
    </DarkModeFontContext.Provider>
  );
}

export function useDarkModeFont() {
  const context = useContext(DarkModeFontContext);

  if (!context)
    throw Error(
      "useDarkModeFont hook should be used inside DarkModeFontProvider"
    );

  return context;
}
