import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../data/library";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function BookDescription() {
  const { bookId } = useParams();

  return (
    <div className="bg-yellow-100 h-screen">
    <Navbar/>
        <section className="pt-10">
          {books?.map((e) => {
            if (e.title.toLowerCase().includes(bookId.toLowerCase()) && bookId != "") {
              return (
                <div
        
                  key={e.id}
                >
                  <div >
                    <img src={e.image} className="w-full max-h-96 object-cover"></img>
                    <div className="leading-10 text-2xl mt-10 px-5">
                      <h2 className="font-bold text-3xl"> <span className="font-bold">Book Title:</span> {e.title}</h2>
                      <p className="italic font-semibold"><span className="font-bold">Written By: </span> {e.author}</p>
                      <p className="italic font-semibold"><span className="font-bold"> Book description:</span> {e.description}</p>
                      <div className=" my-3">
                      <button className="p-4 py-2 text-white bg-blue-500 rounded-md hover:border hover:bg-white border-blue-500 hover:text-blue-500">
                        <a href={e.link} target="_blank" rel="noreferrer">
                          Get Book
                        </a>
                      </button>
                    </div>
                    </div>
        
                  </div>
        
                </div>
              );
            }
          })}
   
        </section>
    </div>
  );
}

export default BookDescription;
