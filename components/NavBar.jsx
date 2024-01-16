import Dictionary from "./icons/Dictionary";
import SearchName from "@/pages/[searchName]";
import { DarkModeContext } from "@/pages/[searchName]";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useState, useEffect, useContext } from "react";

export default function NavBar() {
  const [selectedFont, setSelectedFont] = useState("");
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleSelect = (e) => {
    setSelectedFont(e.target.value);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, [setIsDarkMode]);

  return (
    <section className="dark:bg-midnight-black">
      <nav className="flex py-5 justify-between">
        <Dictionary className="stroke-medium-gray w-8" />
        <div className="flex">
          <select value={selectedFont} onChange={handleSelect}>
            <option value="">--Choose an option--</option>
            <option value="serif">Serif</option>
            <option value="sans">Sans</option>
            <option value="mono">Mono</option>
          </select>
          <span className="border-l mx-2.5"></span>

          <a role="button" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="w-6" /> : <Moon className="w-6" />}
          </a>
        </div>
      </nav>
    </section>
  );
}
