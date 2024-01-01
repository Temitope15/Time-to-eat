/* eslint-disable react/no-unescaped-entities */
import pstBanjo from "/pst-banjo-rb.png";
import { FaMarker } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";
motion;
function Hero() {
  return (
    // bg-blue-500

    /*
    <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
*/
    <main
      id="#"
      className="hero__gradient py-8 px-2 pt-28 lg:pt-14 text-white "
    >
      <section className=" mx-auto md:flex md:justify-between  min-h-min md:items-center px-10 ">
        <motion.div
          className="opacity-0"
          animate={{
            translateY: [-50, 50, 0],
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          <h2 className="relative text-5xl font-semibold  text-center font-secondary md:text-start  lg:text-6xl ">
            <span>Grow up Spriritually</span> <br />{" "}
            <span className=" inline-block leading-none">with</span>{" "}
            <span className="font-secondary text-yellow-400">
              Pastor Banjo's <br />
              Spiritual books.
            </span>{" "}
          </h2>
        </motion.div>
        <div className="flex flex-col gap-5 md:items-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: [100, 0], opacity: 1 }}
            transition={{
              ease: "backInOut",
              duration: 1,
              x: { duration: 1 },
            }}
            src={pstBanjo}
            alt="pastor banjo - author of banjo's diary"
            className=" max-w-full block mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: [10, 0] }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="text-center -m-2 pl-2 gap-2 text-2xl flex items-center  text-yellow-400 md:pl-2"
          >
            {" "}
            <span>
              {" "}
              <FaMarker />
            </span>{" "}
            <span>Pastor Banjo Ayeka</span>
          </motion.p>
        </div>
      </section>
    </main>
  );
}

export default Hero;
