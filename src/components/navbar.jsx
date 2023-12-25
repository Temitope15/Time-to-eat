import  { useState } from "react";
import pstBanjo from "/chi-logo.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
function Navbar(showSearch=true) {
  const [show, setShow] = useState(false);

  return (
    // i removed the fixed property coz it is distubing the diary pages
    <nav className=" font-primary shadow-sky-950 border-b-2 bg-blue-500 shadow-sm z-30  top-0 left-0 right-0 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center gap-5 justify-between px-5 pr-9 pt-2">
          <div>
            <Link to="/">
              <img src={pstBanjo} className="block max-w-[8rem]" />
            </Link>
          </div>

          {showSearch? <SearchBox />: " "}

          <ul className="text-white flex gap-3 desktop__nav__links text-2xl max-lg:hidden ">
            <li className="  border-slate-500   hover:bg-yellow-500">
              <Link className="block p-6 py-6" to={"/book-list"}>
                Books
              </Link>
            </li>
            <li className="  border-slate-500  hover:bg-yellow-500">
              <Link className="block px-6 py-6" to={"/about"}>
                About
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            {show ? (
              <FaMinus
                color="#fff"
                className="cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
                fontSize={30}
              />
            ) : (
              <FaPlus
                color="#fff"
                className="cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
                fontSize={30}
              />
            )}
          </div>
        </div>
    
        {show && (
          <div className="border-t-2  text-2xl ">
            <ul className="text-white ">
              <li className="  border-slate-500 border-b-2 border-b-white hover:bg-yellow-500">
                <Link className="block pl-6 py-6" to={"/book-list"}>
                  Books
                </Link>
              </li>
              <li className="  border-slate-500  hover:bg-yellow-500">
                <Link className="block pl-6 py-6" to="/about">About</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
