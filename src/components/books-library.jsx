/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const BooksLibrary = ({ books, instersection }) => {
  const variants = {
    rotateReveal: {
      rotateY: ["-50deg", 0],
      opacity: [0, 1],
    },
  };
  return (
    <>
      <div className=" mx-auto relative sm:flex  flex-wrap  ">
        {books.map((book, id) => (
          <motion.div
            initial={{ rotateY: "-90deg" }}
            whileInView="rotateReveal"
            transition={{
              duration: 1,
              repeat: 0,
            }}
            viewport={instersection}
            variants={variants}
            className=" lg:basis-[33%] sm:basis-1/2  gap-4 shadow-sm p-4 mb-2 hover:bg-yellow-100  cursor-pointer justify-between items-center rounded-md"
            key={book.id}
          >
            <div className=" gap-3 items-center block py-2">
              <img
                src={book.image}
                className="w-full h-32 object-cover rounded-sm "
              ></img>
              <div>
                <h2 className="font-bold">{book.title}</h2>
                <p className="italic font-semibold"> By {book.author}</p>
              </div>
            </div>

            <div>
              <button className="w-full py-2 border text-white bg-blue-500 rounded-md hover:border hover:bg-white border-blue-500 hover:text-blue-500">
                <a
                  href={book.link}
                  className="block"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Book
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BooksLibrary;
