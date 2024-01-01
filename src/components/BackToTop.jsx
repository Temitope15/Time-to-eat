import { reverseEasing, useScroll } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);
  const height = window.innerHeight;

  window.addEventListener("scroll", (e) => {
    scrollY.on("change", (latest) => setScroll(latest));
    console.log(scroll);
    scroll > height / 3 ? setShow(true) : setShow(false);
  });

  const variants = {
    shown: { opacity: 1, scale: 1, rotate: 0 },
    hidden: { opacity: 0, scale: 0, rotate: -180 },
  };

  return (
    <div>
      <AnimatePresence>
        {show && (
          <motion.a
            initial={{ scale: 0, rotate: -180 }}
            animate={show ? "shown" : "hidden"}
            exit={{ scale: 0, rotate: 0 }}
            variants={variants}
            whileInView={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 0.5 }}
            className="inline-block fixed right-2 bottom-4"
            href="#"
          >
            <div className="bg-blue-500 p-3 rounded-full shadow-2xl shadow-black inline-block  hover:scale-95">
              <FaArrowUp size={40} color="#fff" />
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BackToTop;
