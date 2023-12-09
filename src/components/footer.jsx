import Logo from '/chi-logo.png'
const Footer = () => {
    const d = new Date()
    return ( <>
        <div className="bg-blue-500 p-5 flex items-center">
          <div className=''>
            <img src={Logo} className=' max-h-40 w-[16rem] ' />
          </div>
          <div className=' text-white flex flex-col space-y-5 text-center mx-auto'>
                <ul className='flex md:gap-4 gap-2 '>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Books</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div>
                    <p>copyright@{d.getFullYear()}</p>
                </div>
          </div>
        </div>
    </> );
}
 
export default Footer;