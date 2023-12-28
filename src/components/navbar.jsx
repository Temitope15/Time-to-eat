import { useState } from "react";
import pstBanjo from "/chi-logo.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { motion, AnimatePresence, delay } from "framer-motion";

function Navbar(showSearch = true) {
  /*
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
      <Items />
    </motion.nav>
  )
}
*/

  const variants = {
    open: { opacity: 1, scaleY: 1 },
    closed: { opacity: 0, scaleY: 0 },
  };

  const rotate = {
    open: { rotate: "180deg" },
    closed: { rotate: "-180deg" },
  };

  const [show, setShow] = useState(false);

  return (
    <nav className=" font-primary hero__gradient shadow-sky-950 border-b-2  shadow-sm z-30 fixed top-0 left-0 right-0 ">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center gap-5 justify-between px-5 pr-9  ">
          <div>
            <Link to="/">
              <img src={pstBanjo} className="block max-w-[6rem]" />
            </Link>
          </div>

          {showSearch ? <SearchBox /> : " "}

          <ul className="text-white flex gap-3 desktop__nav__links text-2xl max-lg:hidden ">
            <li className="  border-slate-500   hover:bg-yellow-500">
              <Link className="block p-6 py-6" to={"/book-list"}>
                Books
              </Link>
            </li>
            <li className="  border-slate-500  hover:bg-yellow-500">
              <Link className="block px-6 py-6" to={"/book-list"}>
                About
              </Link>
            </li>
          </ul>
          <AnimatePresence>
            <div className="lg:hidden">
              {show ? (
                <motion.div
                  className=""
                  initial={{ rotate: 0 }}
                  animate={show ? "open" : "closed"}
                  exit={{ rotate: 0 }}
                  variants={rotate}
                >
                  <FaMinus
                    color="#fff"
                    className="cursor-pointer"
                    onClick={() => setShow((prev) => !prev)}
                    fontSize={30}
                  />
                </motion.div>
              ) : (
                <motion.div className="">
                  <FaPlus
                    color="#fff"
                    className="cursor-pointer"
                    onClick={() => setShow((prev) => !prev)}
                    fontSize={30}
                  />
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="popLayout">
          {show && (
            <motion.div
              className="border-t-2  text-2xl lg:hidden origin-top "
              initial={{ scaleY: 0 }}
              animate={show ? "open" : "closed"}
              exit={{ scaleY: 0 }}
              variants={variants}
            >
              <motion.ul
                transition={{ delayChildren: 1 }}
                className="text-white "
              >
                <motion.li
                  animate={{ x: 0 }}
                  initial={{ x: -100 }}
                  transition={{ delay: 0.2 }}
                  className="  border-slate-500 border-b-2 border-b-white hover:bg-yellow-500"
                >
                  <Link className="block pl-6 py-4" to={"/book-list"}>
                    Books
                  </Link>
                </motion.li>
                <motion.li
                  animate={{ x: 0 }}
                  initial={{ x: -100 }}
                  transition={{ delay: 0.4 }}
                  className="  border-slate-500  hover:bg-yellow-500"
                >
                  <Link className="block pl-6 py-4">About</Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
