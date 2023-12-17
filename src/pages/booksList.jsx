import BooksLibrary from "../components/books-library";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { books } from "../data/library";


const BooksList = () => {
<<<<<<< HEAD
    return ( <div>
        <h3>below are the books Pastor Banjo has written over the years</h3>
        <BooksLibrary books={books}/>
    </div> );
=======
    return ( <>
    <Navbar/>
        <div className="md:p-8">
            <h3 className="p-2 text-center">below are the books Pastor Banjo has written over the years</h3>
            <BooksLibrary books={books}/>
        </div>
    <Footer/>

    </> );
>>>>>>> 8026f1aa53f32f4a61bf3905c20550f803dee610
}
 
export default BooksList;