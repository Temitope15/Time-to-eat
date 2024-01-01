/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ pages, intersection }) => {
  const reversedPages = [...pages].reverse(); // Create a copy of the array and reverse it
  const slideIn = {
    opacity: [0, 1],
    scale: 1,
  };
  return (
    <>
      {reversedPages.map((page, id) => (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={slideIn}
          transition={{ duration: 0.2, delay: id * 0.01 }}
          viewport={intersection}
          key={page.id}
          className="border p-4 m-4 cursor-pointer hover:bg-gray-100 mb-4 space-y-2"
        >
          <Link to={`/diary/${page.id}`}>
            <h2 className="text-xl font-semibold hover:text-blue-400">
              {page.title}
            </h2>
          </Link>
          <p>page {page.page}</p>
          <p className="text-gray-600">{page.content?.[0] + "..."}</p>
          <Link to={`/diary/${page.id}`} className="hover:text-blue-500">
            Read more
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Card;
