/* eslint-disable react/no-unescaped-entities */
import pstBanjo from "/pst-banjo-rb.png";
import { FaMarker } from "react-icons/fa";
import { motion } from "framer-motion";
motion;
function Hero() {
  return (
    <main className=" bg-blue-500 py-8 px-4 pt-28 lg:pt-24  text-white ">
      <section className=" mx-auto md:flex md:justify-between md:items-center px-10 ">
        <div>
          <h2 className="relative text-5xl font-semibold  text-center font-secondary md:text-start  lg:text-6xl ">
            <span>Grow up Spriritually</span> <br />{" "}
            <span className=" inline-block leading-none">with</span>{" "}
            <span className="font-secondary text-yellow-400">
              Pastor Banjo's <br />
              Spiritual books.
            </span>{" "}
          </h2>
        </div>
        <div className="flex flex-col gap-5 md:items-center">
          <img
            src={pstBanjo}
            alt="pastor banjo - author of banjo's diary"
            className=" max-w-full inline-block mx-auto"
          />
          <p className="text-center pl-8 gap-3 text-2xl flex items-center  text-yellow-400 md:pl-2">
            {" "}
            <span>
              {" "}
              <FaMarker />
            </span>{" "}
            <span>Pastor Banjo Ayeka</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero;
