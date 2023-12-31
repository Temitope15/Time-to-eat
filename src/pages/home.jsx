import { BsPenFill } from "react-icons/bs";
import BooksLibrary from "../components/books-library";
import { books } from "../data/library";
import Card from "../components/card";
import { banjoDiary } from "../data/banjo-diary";
import Hero from "../components/Hero";
import TimeToEat from "../components/time-to-eat";
import AudioTeaching from "../components/audio-teachings";
import { SiBookstack } from "react-icons/si";
import { motion } from "framer-motion";
import ViewMore from "../components/view-more-btn";

const Home = () => {
  const slicedBooks = books.slice(0, 3);
  const currentBook = "Banjo Ayeka Diary";
  const slicedDiary = banjoDiary.slice(-1);

  const bookLibraryText = "Books written by Pastor Banjo Ayeka";

  return (
    <div>
      <Hero />
      <section>
        <div className="px-5">
          <h1 className="font-bold py-3 mb-3 justify-center gap-2 border-b border-blue-500 flex items-center">
            <motion.span
              initial={{ scale: 1 }}
              whileInView={{ scale: [0, 1.2, 1.5, 1] }}
              transition={{
                duration: 1,
              }}
              className="text-blue-500 block mr-5"
            >
              <SiBookstack size={50} />
            </motion.span>
            <motion.span
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{
                duration: 1,
              }}
              className="span font-secondary"
            >
              {bookLibraryText}
            </motion.span>
          </h1>
          <BooksLibrary books={slicedBooks} instersection={{ once: true }} />
          <ViewMore link="/book-list" text="Go to Library" />
        </div>

        <motion.div>
          <TimeToEat />
          <div className="p-4 border-b border-blue-500">
            <h1 className="font-primary font-bold text-xl  italic px-4 flex items-center gap-2">
              <BsPenFill className="text-blue-500" />
              Latest on {currentBook}...
            </h1>
            <Card pages={slicedDiary} instersection={{ once: true }} />
            <ViewMore text="Read previous pages" link="/diary" />
          </div>
          <AudioTeaching />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

/**
 * Work to do
 * - when each book is clicked it should route to a page that contains like a summary of the book - done
 * - Make the pages of banjo ayeka diary functional
 * - Update the necessary links e.g link to join the telegram
 * - add the social media icons in the footer for people to be able to access him on social media platforms
 * - create about and contact pages
 * - update the library with the images and the books
 * -  make the diary data up to date and effective
 * - Add animations to the website
 */
