import Dictionary from "./icons/Dictionary";
import ChevronDown from "./icons/ChevronDown";
import Moon from "./icons/Moon";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
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
      <div className="flex relative">
        <input
          type="text"
          placeholder="Type your search word"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-light-gray focus:outline-pale-purple w-full py-1.5 pl-3 rounded-lg text-midnight-black font-bold placeholder:font-normal"
        />
        <Image
          src="./search-icon.svg"
          alt="search icon"
          width="20"
          height="20"
          className="absolute right-1 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
