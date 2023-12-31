import BooksLibrary from "../components/books-library";
import { books } from "../data/library";

const BooksList = () => {
  return (
    <section>
      <div className="py-24">
        <h3 className="p-2 text-center text-lg italic font-semibold font-secondary">
          Below are the books Pastor Banjo has written over the years
        </h3>
        <BooksLibrary books={books} instersection={{ once: true }} />
      </div>
    </section>
  );
};

export default BooksList;

/**
 * implement back to top button
 * implement an about book page, containing short description of the book clicked
 * motion of the cards on scroll
 */
