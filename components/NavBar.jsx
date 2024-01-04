import Dictionary from "./icons/Dictionary";
import ChevronDown from "./icons/ChevronDown";
import Moon from "./icons/Moon";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <nav className="flex">
        <Dictionary className="stroke-royal-purple w-8" />
        <div className="flex">
          <p>Serif</p>
          <ChevronDown className="stroke-royal-purple w-6" />
        </div>
        <div>
          <Moon className="w-6" />
        </div>
      </nav>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a word"
          value=""
          className="bg-grey"
        />
        <Image
          src="./search-icon.svg"
          alt="search icon"
          width="20"
          height="20"
          className="absolute left-36"
        />
      </div>
    </div>
  );
}
