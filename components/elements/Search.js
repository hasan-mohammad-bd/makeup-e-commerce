import { useRouter } from "next/navigation";
import React, { useState } from "react";

// ** Import Icons
import { HiMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push("/products?text=" + searchTerm);
    setSearchTerm("");
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <form>
        <input
          value={searchTerm}
          onKeyDown={handleInput}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="আপনার কাঙ্খিত পণ্য সার্চ করুন"
          className="border-r-0"
        />
        <button type="submit" className="search-btn">
          <HiMagnifyingGlass size={24} color="#fff" />
        </button>
      </form>
    </>
  );
};

export default Search;
