import React, { useState } from 'react'
import pstBanjo from  '/chi-logo.png'
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {

  const [show ,setShow] = useState(false)
  
  return (
   <nav className=' font-secondary shadow-sky-950 border-b-2 bg-blue-500 shadow-md z-30'>

   <div  className='flex items-center justify-between px-5 pr-9 pt-2' >
     <div>
     <Link to="/"><img  src={pstBanjo} className='block max-w-[8rem]' /></Link>
     </div>
     <div>
    {show ? <FaMinus color='#fff' className='cursor-pointer' onClick={()=>setShow(prev=> !prev)}  fontSize={30}  /> : <FaPlus color='#fff' className='cursor-pointer' onClick={()=>setShow(prev=> !prev)}  fontSize={30} /> }
     </div>
   </div>
{
  show &&(
    <div className='border-t-2  text-2xl '>
    <ul className='text-white '>
    <li className='  border-slate-500 border-b-2 border-b-white hover:bg-yellow-400'><Link className='block pl-6 py-6' to={"/book-list"} >Books</Link></li>
    <li className='  border-slate-500  hover:bg-yellow-400'><Link className='block pl-6 py-6' >About</Link></li>
  
    </ul>
    </div>
 
  )
}
 
   
   </nav>
  )
}

export default Navbar