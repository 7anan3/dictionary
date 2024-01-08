import Dictionary from "./icons/Dictionary";
import Moon from "./icons/Moon";
import SearchBar from "./SearchBar";

export default function NavBar() {
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
          <Moon className="w-6" />
        </div>
      </nav>
    </section>
  );
}
