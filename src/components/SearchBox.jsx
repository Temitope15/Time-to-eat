import React, { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import { books } from "../data/library";
import { useParams } from "react-router-dom";


function SearchBox() {
  const [search, setSearch] = useState("");
  const { id } = useParams(); // get id by react-route


  function onTestClick(e) {
    e.preventDefault();
    books?.map((e) => {
    if(e.title.toLocaleLowerCase().includes(search) && search != "" ){
    window.location.href = '/book-list/' + search
    }
  })
    return false;
}



  return (
    <form onSubmit={onTestClick} className="w-[95%] mx-auto rounded-full glass__bg my-3 relative z-50 ">
      <input
        type="search"
        value={search}
        className="block text-white px-6 leading-[4rem] rounded-full w-full bg-transparent text-2xl basis-full focus:semi__glass__bg"
        placeholder="Search for inspiring books"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="absolute w-full semi__glass__bg top-20 rounded-lg overflow-hidden shadow-sky-950 shadow-2xl max-h-80 overflow-y-auto min-w-[200px]">
        <ul>
          {books?.map((e) => {
            if(e.title.toLowerCase().includes(search) && search != "" ){
         return  ( <li key={e.title} className="border-b-2 border-slate-200">
              <Link
                className="px-6 py-3 block text-xl hover:bg-slate-200 "
                to={"/book-list/" + e.title}
              >
                {e.title}
              </Link>
              <p>{console.log(e.title)}</p>
            </li>) 
         }
          })}
        </ul>
      </div>
    </form>
  );
}

export default SearchBox;
