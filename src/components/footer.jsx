<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";
import Logo from "/chi-logo.png";
const Footer = () => {
  const d = new Date();
  const footerLinks = [
    { route: "/", text: "Home" },
    { route: "/book-list", text: "Books" },
    { route: "/", text: "Contact" },
  ];
  return (
    <>
      <div className="bg-blue-500 p-5 flex items-center">
        <div className="">
          <img src={Logo} className=" max-h-40 w-[16rem] " />
        </div>
        <div className=" text-white flex flex-col space-y-5 text-center mx-auto">
          <ul className="flex md:gap-4 gap-2 ">
            {footerLinks.map((link, i) => (
              <Link to={link.route} key={i}>{link.text}</Link>
            ))}
          </ul>
          <div>
            <p>copyright@{d.getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
>>>>>>> 8026f1aa53f32f4a61bf3905c20550f803dee610
