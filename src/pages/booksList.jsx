import BooksLibrary from "../components/books-library";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { books } from "../data/library";


const BooksList = () => {
    return ( <div>
    <Navbar showSearch={false}/>
        <div className="md:p-8">
            <h3 className="p-2 text-center text-lg italic font-semibold">Below are the books Pastor Banjo has written over the years</h3>
            <BooksLibrary books={books}/>
        </div>


    </div> );
}
 
export default BooksList;

/**
 * implement back to top button
 * implement an about book page, containing short description of the book clicked
 * motion of the cards on scroll
 */