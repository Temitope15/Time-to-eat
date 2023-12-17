<<<<<<< HEAD
// import { FaSearch } from "react-icons/fa";
// import "./Home.css";
=======
import { BsPenFill } from "react-icons/bs"; 
import Footer from "../components/footer";
>>>>>>> 8026f1aa53f32f4a61bf3905c20550f803dee610
import BooksLibrary from "../components/books-library";
import { books } from "../data/library";
import Card from "../components/card";
import { banjoDiary } from "../data/banjo-diary";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
<<<<<<< HEAD
import Footer from "../components/footer";
=======
import TimeToEat from "../components/time-to-eat";
import AudioTeaching from "../components/audio-teachings";
>>>>>>> 8026f1aa53f32f4a61bf3905c20550f803dee610

const Home = () => {
  const slicedBooks = books.slice(0, 3);

  const bookLibraryText = "Books written by Pastor Banjo Ayeka";
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
<<<<<<< HEAD
        <FaSearch style={{ color: "red", fontSize: "50px" }} />
      </div> */}
      <section className="my-10 px-3">
        <div>
          <BooksLibrary books= {slicedBooks} />
          <Link to="/book-list">View more....</Link>
        </div>
             <div>
        <h1>Latest on Bannjo Ayeka Diary</h1>
        <Card pages={banjoDiary}/>
             </div>
        
          
      </section>
      <Footer/>
    </div>
=======
        <BooksLibrary books={slicedBooks} text={bookLibraryText} />
      </div>
>>>>>>> 8026f1aa53f32f4a61bf3905c20550f803dee610

      <TimeToEat />
      <div className="p-4 border-b border-blue-500">
        <h1 className="font-primary font-bold text-xl  italic px-4 flex items-center gap-2"><BsPenFill className="text-blue-500"/>Latest on Banjo Ayeka Diary...</h1>
        <Card pages={banjoDiary} />
      </div>
      <AudioTeaching/>

      <Footer />
    </div>
  );
};

export default Home;

/**
 * Work to do
 * - when each book is clicked it should route to a page that contains like a summary of the book
 * - Make the pages of banjo ayeka diary functional
 * - Update the necessary links e.g link to join the telegram
 * - add the social media icons in the footer for people to be able to access him on social media platforms
 * - create about and contact pages
 * - create a special page for each blog using a specified format
 * - update the library with the images and the books
 * -  make the diary data up to date and effective
 * - Add animations to the website
 */