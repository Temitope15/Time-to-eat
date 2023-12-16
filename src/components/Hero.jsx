
import pstBanjo from  '/pst-banjo-rb.png'
import { FaMarker, FaPersonBooth, FaPortrait, FaPrescription } from 'react-icons/fa'

function Hero() {
  return (
    <main className=' bg-blue-500 pt-16 px-4 min-h-screen text-white h-full' >
  
    <h2 className='relative text-5xl font-semibold  text-center font-secondary '><span>Grow up Spriritually</span> <br/> <span className=' inline-block leading-none'>with</span> <br/> <span className='font-secondary text-yellow-400'>Pastor Banjo's <br/>Spiritual books.</span> </h2>
   
    <div className='flex flex-col gap-5'>
    <img  src={pstBanjo} alt="pastor banjo - author of banjo's diary" className=' max-w-full block mx-auto' />
 

    <p className='text-center pl-14 pb-3 gap-3 text-2xl flex justify-start items-center text-yellow-400'> <span> <FaMarker  /></span> <span>Pastor Banjo Ayeka</span></p>
    </div>
    </main> 
  )
}

export default Hero