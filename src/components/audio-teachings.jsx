/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const data = [
  { title: " Sunday", time: "9:00am WAT" },
  { title: " Wednesday", time: "6:00pm WAT" },
];

const slideIn = {
  opacity: [0, 1],
  scale: 1,
};

const Card = ({ title, time }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={slideIn}
      transition={{ duration: 0.4, delayChildren: 1 }}
      className="card shadow-lg border-b-4 border-blue-500 p-4 cursor-pointer text-center min-w-[8rem] hover:bg-blue-500 hover:text-white hover:border-blue-700 rounded-md"
    >
      <p>Every {title}</p>
      <p className="font-bold">{time}</p>
    </motion.div>
  );
};

const AudioTeaching = () => {
  return (
    <>
      <motion.div className="container mx-auto px-4 py-10">
        <div className="space-y-4">
          <h2 className="text-xl text-center px-3 md:px-0 font-bold">
            Come fellowship at the{" "}
            <span className="uppercase font-bold text-blue-500">
              conference house of Immortals
            </span>
          </h2>
          <div className="flex justify-around items-center w-full md:w-3/5 mx-auto">
            {data.map((item, index) => (
              <Card key={index} title={item.title} time={item.time} />
            ))}
          </div>
        </div>
        <h2 className=" font-semibold text-gray-900 text-center p-4">
          You can also access his Audio Teachings by{" "}
          <Link to="https://t.me/c/1810377308/210" className="font-bold text-blue-500">
            clicking here
          </Link>
        </h2>
      </motion.div>
    </>
  );
};

export default AudioTeaching;
