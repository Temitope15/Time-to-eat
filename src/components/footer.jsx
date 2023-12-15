import Logo from '/chi-logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    const d = new Date()
    return ( <footer className="bg-blue-500 py-6 text-white ">
        <div className=" py-3 lg:flex  max-w-md mx-auto items-center justify-between">
          <div>
            <img src={Logo} className='inline-block max-w-sm ' />
          </div>
          <div className=' text-white px-3   text-center mx-auto'>
                <ul className='flex justify-center md:gap-4 gap-2 '>
                    <li><Link to="/">Home</Link></li>
                    <li><Link  to="/book-list">Books</Link></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
              
          </div>
        </div>
        <div>
        <p className='text-center'>copyright@{d.getFullYear()}</p>
    </div>
    </footer> );
}
 
export default Footer;