/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ pages }) => {
  return (
    <div className="border p-4 m-4 cursor-pointer hover:bg-gray-100">
      {pages.map((page)=>(
        <div key={page.page} >
          
            <h2 className="text-xl font-semibold">{page.title}</h2>
            <p className="text-gray-600">{page.content[0] + "..."}</p>
            <Link to={`/diary/${page.page}`}> Read more</Link>
      </div>))}
    </div>
  );
};

export default Card;