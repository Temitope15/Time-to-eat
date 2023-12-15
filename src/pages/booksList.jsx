import BooksLibrary from "../components/books-library";
import { books } from "../data/library";


const BooksList = () => {
    return ( <div>
        <h3>below are the books Pastor Banjo has written over the years</h3>
        <BooksLibrary books={books}/>
    </div> );
}
 
export default BooksList;