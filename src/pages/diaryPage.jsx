import { banjoDiary } from "../data/banjo-diary";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const DiaryPages = () => {
  const { id } = useParams();
  const result = banjoDiary[id];


  return (
    <>
    <Navbar showSearch={false}/>
      {id ? (
        <div className="md:px-10 px-4 py-4">
          <div className="text-justify">
            <p className="font-bold text-lg text-center">{result.bookName}</p>
            <h1 className="font-bold text-lg text-center">
              {result.title}
              <span>
                <p className="italic font-semibold mb-4">
                  page {result.id + 1}
                </p>
              </span>
            </h1>

            {result.content.map((text) => (
              <p key={text} className="mb-3 bg-gray-200 p-3 rounded-lg shadow-md">
                {text}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Page not found</p>
      )}
      <Footer/>
    </>
  );
};

export default DiaryPages;
/**
 * make the page and layout more interactive in terms of motion and interactivity
 * hide the search place in the navbar 
 * implement the page not found logic
 * implement the back to top button
 */
