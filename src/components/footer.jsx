import { Link } from "react-router-dom";
import Logo from "/chi-logo.png";
import { footerLinks, socialMedia } from "../data/footer-data";
import SocialMedia from "./social-media";
const Footer = () => {
  const d = new Date();

  return (
    <div className="bg-blue-500 p-5 md:pl-10 text-white text-center">
      <div className=" flex items-center">
        <Link to="/">
          <img src={Logo} className=" max-h-40 w-[12rem] " />
        </Link>

        <div className=" mx-auto">
          <ul className="flex md:gap-4 gap-2 ">
            {footerLinks.map((link, i) => (
              <Link
                to={link.route}
                key={i}
                className="hover:pb-2 hover:text-blue-900"
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center md:mt-[-0.9rem] mt-2">
        {socialMedia.map((media, i) => (
          <div key={i}>
            <SocialMedia link={media.link} icon={media.icon} />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>copyright ©{d.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
