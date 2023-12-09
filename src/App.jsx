import { FaSearch } from "react-icons/fa";
import "./App.css";
import Footer from "./components/footer";
import { banjoDiary } from "./data/banjo-diary";
import BooksLibrary from "./components/books-library";

function App() {
  return (
    <div>
      <div>
        <h1 className="font-primary block text-2xl"></h1>
      </div>
      <div>
        <FaSearch style={{ color: "red", fontSize: "50px" }} />
      </div>
      <BooksLibrary />
      {/* testing the data layout */}
      <div className="px-10 ">
      {/* loop through the banjo diary pages */}
        {banjoDiary.map((pages)=>(
          <p key={pages.page} className="text-justify">
          {/* then loop through the text content array */}
          <p className="font-bold text-lg text-center">{pages.bookName}</p>
          <h1 className="font-bold text-lg text-center">{pages.title}<span><p className="italic font-semibold mb-4">page {pages.page}</p></span></h1>
          
            {pages.content.map((text)=>(
              <p key={text} className="mb-3">{text}</p>
            ))}
          </p>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;


// git pull origin master
//npm run dev
//git add .
// git commit -m "bla bla bla"
//git push