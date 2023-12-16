import BooksLibrary from "../components/books-library";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { books } from "../data/library";

const BooksList = () => {
    return ( <>
    <Navbar/>
        <div className="md:p-8">
            <h3 className="p-2 text-center">below are the books Pastor Banjo has written over the years</h3>
            <BooksLibrary books={books}/>
        </div>
    <Footer/>

    </> );
}
 
export default BooksList;