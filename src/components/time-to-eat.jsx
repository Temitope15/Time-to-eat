import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const TimeToEat = () => {
  const slideIn = {
    opacity: [0, 1],
    x: 0,
  };
  return (
    <motion.div
      initial={{ x: -200 }}
      whileInView={slideIn}
      transition={{ duration: 0.4 }}
    >
      <div className="p-4 border-b-2 border-blue-500 rounded-lg  ">
        <div className="shadow-xl m-2 p-2 rounded-lg">
          <h1 className="flex items-center text-xl font-bold gap-2">
            It is time to Eat!
            <span>
              {" "}
              <MdFastfood className="text-blue-500 w-[16px]" />
            </span>
          </h1>
          <p>
            Time to eat is a writing ministry God gave pastor Banjo ayeka where
            he feeds his sheep daily with the the word of grace to build them
          </p>
          <p>
            To join this movement{" "}
            <Link to="https://ultramsg.com/m/47bsZqg" className="font-bold text-blue-500">
              click me
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeToEat;
