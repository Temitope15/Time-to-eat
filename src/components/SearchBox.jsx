import React, { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import { books } from "../data/library";
import { useParams } from "react-router-dom";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const { id } = useParams(); // get id by react-route

  function onTestClick(e) {
    e.preventDefault();

    if (search != "") {
      window.location.href = "/book-list/" + search;
      setFilteredSearch([]);
    }

    return false;
  }
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filterResult = books.filter((e) => {
      return e.title.toLowerCase().includes(search);
    });
    setFilteredSearch(filterResult);
  };

  const handleLinkClick = () => {
    setFilteredSearch([]);
    setSearch("");
  };

  return (
    <form
      onSubmit={onTestClick}
      className="w-[95%] mx-auto rounded-full glass__bg my-3 relative z-50 "
    >
      <input
        type="search"
        value={search}
        className="block text-white px-6 leading-[4rem] rounded-full w-full bg-transparent text-2xl basis-full focus:semi__glass__bg"
        placeholder="Search for inspiring books"
        onChange={handleSearch}
      />

      <div className="absolute block w-full semi__glass__bg top-20 rounded-lg overflow-hidden shadow-sky-950 shadow-2xl max-h-80 overflow-y-auto min-w-[200px]">
        <ul>
          {filteredSearch.length != 0
            ? filteredSearch.map((e) => {
                if (e.title.toLowerCase().includes(search) && search != "") {
                  return (
                    <li key={e.title} className="border-b-2 border-slate-200">
                      <Link
                        key={e.title}
                        className="px-6 py-3 block text-xl hover:bg-slate-200 "
                        to={"/book-list/" + e.title}
                        onClick={handleLinkClick}
                      >
                        {e.title}
                      </Link>
                    </li>
                  );
                }
              })
            : console.log("filter Array is empty")}
        </ul>
      </div>
    </form>
  );
}

export default SearchBox;
