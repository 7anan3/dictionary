import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div className="px-6 md:px-20 lg:w-4/6 lg:m-auto">
      <NavBar />
      <SearchBar />
    </div>
  );
}
