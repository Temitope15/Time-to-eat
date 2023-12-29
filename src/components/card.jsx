/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ pages }) => {
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
          transition={{ duration: 0.4, delay: id * 0.1 }}
          key={page.id}
          className="border p-4 m-4 cursor-pointer hover:bg-gray-100 mb-4"
        >
          <h2 className="text-xl font-semibold">{page.title}</h2>
          <p className="text-gray-600">{page.content?.[0] + "..."}</p>
          <Link to={`/diary/${page.id}`}> Read more</Link>
        </motion.div>
      ))}
    </>
  );
};

export default Card;
