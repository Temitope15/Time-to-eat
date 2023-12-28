/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SocialMedia = ({ link, icon: IconComponent }) => {
  return (
    <div>
      <Link to={link} className="hover:text-blue-900">
        <IconComponent size={20} />
      </Link>
    </div>
  );
};

export default SocialMedia;
