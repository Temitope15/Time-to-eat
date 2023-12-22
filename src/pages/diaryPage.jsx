import { banjoDiary } from "../data/banjo-diary";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

const DiaryPages = () => {
  const { id } = useParams();
  const result = banjoDiary[id];

  return (
    <>
      {id ? (
        <div className="md:px-10 px-6">
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
              <p key={text} className="mb-3 bg-gray-300 p-2 rounded-sm">
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
