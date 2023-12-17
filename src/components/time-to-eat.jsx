import { MdFastfood } from "react-icons/md"; 
import { Link } from "react-router-dom";
const TimeToEat = () => {
    return ( 
        <div>
            <div className="p-4 border-b-2 border-blue-500 rounded-lg  ">
                <div className="shadow-xl m-2 p-2 rounded-lg" >
                    <h1 className="flex items-center text-xl font-bold gap-2">
                        It is time to Eat!<span>{" "}<MdFastfood className="text-blue-500 w-[16px]" /></span>
                    </h1>
                    <p>Time to eat is a writing ministry God gave pastor Banjo ayeka where he feeds his sheep daily with the the word of grace to build them</p>
                    <p>To join this movement <Link to="" className="font-bold text-blue-500">click me</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default TimeToEat;