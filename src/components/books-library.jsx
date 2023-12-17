import { MdOutlineNavigateNext } from "react-icons/md"; 
import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const BooksLibrary = ({ books, text }) => {
  return (
    <>
      <h1 className="font-bold py-3 justify-center gap-2 border-b border-blue-500 flex items-center">
        <span className="text-blue-500 ">
          <SiBookstack size={50} />
        </span>
        {text}
      </h1>
      <div className="container mx-auto relative">
        {books.map((book) => (
          <div
            className="flex  gap-4 shadow-sm p-4 mb-2 hover:bg-slate-300 cursor-pointer justify-between items-center"
            key={book.id}
          >
            <div className="flex gap-3 items-center">
              <img src={book.image} className="w-[100px] h-[100px] "></img>
              <div>
                <h2 className="font-bold">{book.title}</h2>
                <p className="italic font-semibold"> By {book.author}</p>
              </div>
            </div>

            <div>
              <button className="w-24 py-2 text-white bg-blue-500 rounded-md hover:border hover:bg-white border-blue-500 hover:text-blue-500">
                <a href={book.link} target="_blank" rel="noreferrer">
                  Get Book
                </a>
              </button>
            </div>
          </div>
        ))}
        <Link
          to="/book-list"
          className="p-4 text-white bg-blue-500 rounded-md hover:border hover:bg-white border-blue-500 hover:text-blue-500 flex justify-center items-center text-xl"
        >
          View more <MdOutlineNavigateNext size={30}/>
        </Link>
      </div>
    </>
  );
};

export default BooksLibrary;
