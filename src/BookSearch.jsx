import React, { useContext} from "react";
import { booksContext } from "./BookProvider";

function BookSearch() {
  const { search, setSearch} = useContext(booksContext);
  

  return (
    <div>
        {/* SEARCH */}
        <h1 className="text-2xl md:text-4xl py-5">Search for Books</h1>
        <h2 className="text-xl md:text-2xl py-5">Search for Books</h2>
        <input
          type="text"
          placeholder="Search Books..."
          className="border outline-0 px-4 py-2 rounded-md text-base md:text-2xl mb-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
    </div>
  );
}

export default BookSearch;

