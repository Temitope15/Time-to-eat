import { BsPenFill } from "react-icons/bs"; 
import Footer from "../components/footer";
import BooksLibrary from "../components/books-library";
import { books } from "../data/library";
import Card from "../components/card";
import { banjoDiary } from "../data/banjo-diary";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import TimeToEat from "../components/time-to-eat"

const Home = () => {
  const slicedBooks = books.slice(0, 3);

  const bookLibraryText = "Books written by Pastor Banjo Ayeka";
  return (
    <div>
    <div>
      <Navbar />
      <Hero />
      <div>
    
      </div> 
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

      <TimeToEat />
      <div className="p-4 border-b border-blue-500">
        <h1 className="font-primary font-bold text-xl  italic px-4 flex items-center gap-2"><BsPenFill className="text-blue-500"/>Latest on Banjo Ayeka Diary...</h1>
        <Card pages={banjoDiary} />
      </div>
  
    <div/>
    </div>
  )
};

export default Home;

