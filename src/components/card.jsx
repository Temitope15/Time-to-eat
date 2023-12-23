/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Card = ({ pages }) => {
  const reversedPages = [...pages].reverse(); // Create a copy of the array and reverse it

  return (
    <>
      {reversedPages.map((page) => (
        <div key={page.id} className="border p-4 m-4 cursor-pointer hover:bg-gray-100 mb-4">
          <h2 className="text-xl font-semibold">{page.title}</h2>
          <p className="text-gray-600">{page.content?.[0] + "..."}</p>
          <Link to={`/diary/${page.id}`}> Read more</Link>
        </div>
      ))}
    </>
  );
};

export default Card;
