import { banjoDiary } from "../data/banjo-diary";
import { useParams } from "react-router-dom";
import ViewMore from "../components/view-more-btn";
const DiaryPages = () => {
  const { id } = useParams();
  const result = banjoDiary[id];

  return (
    <section className="pt-24">
      {id ? (
        <div className="md:px-10 px-4 py-4">
          <div className="text-justify">
            <p className="font-bold text-lg text-center">{result.bookName}</p>
            <h1 className="font-bold text-lg text-center">
              {result.title}
              <span>
                <p className="italic font-semibold mb-4">page {result.page}</p>
              </span>
            </h1>

            {result.content.map((text) => (
              <p
                key={text}
                className="mb-3 bg-gray-200 p-3 rounded-lg shadow-md"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Page not found</p>
      )}
      <ViewMore
        text="Join our Whatsapp Group"
        link="https://ultramsg.com/m/48aVy8A"
        style="md:text-xl text-sm w-1/2 mx-auto text-center my-2"
      />
    </section>
  );
};

export default DiaryPages;
/**
 * make the page and layout more interactive in terms of motion and interactivity
 * hide the search place in the navbar
 * implement the page not found logic
 * implement the back to top button
 */
