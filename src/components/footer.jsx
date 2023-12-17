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
