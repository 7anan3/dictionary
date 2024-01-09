import Dictionary from "./icons/Dictionary";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section>
      <nav className="flex py-5 justify-between">
        <Dictionary className="stroke-medium-gray w-8" />
        <div className="flex">
          <select>
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans</option>
            <option value="mono">Mono</option>
          </select>
          <span className="border-l mx-2.5"></span>

          <a role="button" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="w-6" onClick={toggleTheme} />
            ) : (
              <Moon className="w-6" onClick={toggleTheme} />
            )}
          </a>
        </div>
      </nav>
    </section>
  );
}
