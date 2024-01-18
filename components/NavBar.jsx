import Dictionary from "./icons/Dictionary";
import SearchName from "@/pages/[searchName]";
import { DarkModeFontContext } from "@/pages/_app";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useEffect, useContext } from "react";

export default function NavBar() {
  const { isDarkMode, setIsDarkMode, selectedFont, setSelectedFont } =
    useContext(DarkModeFontContext);

  //Handle font selection
  const handleSelect = (e) => {
    setSelectedFont(e.target.value);
  };

  // Toggle dark / light mode + Localstorage
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
      <nav className="flex py-5 justify-between ">
        <Dictionary className="stroke-medium-gray w-8 shrink-0" />
        <div className="flex">
          <select
            value={selectedFont}
            onChange={handleSelect}
            className="dark:bg-midnight-black dark:text-white border-none w-36"
          >
            <option value="">--Choose a font--</option>
            <option value="font-serif">Serif</option>
            <option value="font-sans">Sans</option>
            <option value="font-mono">Mono</option>
          </select>
          <span className="border-l mx-2.5"></span>

          <a role="button" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="w-6" color="white" />
            ) : (
              <Moon className="w-6" />
            )}
          </a>
        </div>
      </nav>
    </section>
  );
}
