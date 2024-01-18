import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import { DarkModeFontContext } from "@/pages/_app";
import { useContext } from "react";

export default function HomePage() {
  const { isDarkMode } = useContext(DarkModeFontContext);
  return (
    <div className={`${isDarkMode ? "dark bg-midnight-black" : ""} h-screen`}>
      <div className="px-6 md:px-20 lg:w-4/6 lg:m-auto">
        <NavBar />
        <SearchBar />
      </div>
    </div>
  );
}
