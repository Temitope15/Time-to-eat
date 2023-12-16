import { BsPenFill } from "react-icons/bs"; 
import Footer from "../components/footer";
import BooksLibrary from "../components/books-library";
import { books } from "../data/library";
import Card from "../components/card";
import { banjoDiary } from "../data/banjo-diary";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import TimeToEat from "../components/time-to-eat";
import AudioTeaching from "../components/audio-teachings";

const Home = () => {
  const slicedBooks = books.slice(0, 3);

  const bookLibraryText = "Books written by Pastor Banjo Ayeka";
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <BooksLibrary books={slicedBooks} text={bookLibraryText} />
      </div>

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