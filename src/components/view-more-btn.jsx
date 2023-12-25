/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const ViewMore = ({ link, text, style}) => {
    return ( <>
<Link
          to={link}
          className={style + " text-white bg-blue-500 rounded-md hover:border hover:bg-white border-blue-500 hover:text-blue-500 flex justify-center items-center text-xl  p-4"}
        >
          {text} <MdOutlineNavigateNext size={30}/>
        </Link>
    </> );
}
 
export default ViewMore;