// import { FaSearch } from "react-icons/fa";
// import "./Home.css";
import BooksLibrary from "../components/books-library";
import { books } from "../data/library";
import { Link } from 'react-router-dom';
import Card from "../components/card";
import { banjoDiary } from "../data/banjo-diary";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const  Home = () => {
  const slicedBooks =  books.slice(0,3)
  return (
    <div>
    <Navbar/>
    <Hero/>
      {/* <div>
        <h1 className="font-primary block text-2xl"></h1>
      </div>
      <div>
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

  );
}

export default Home;


// git pull origin master
//npm run dev
//git add .
// git commit -m "bla bla bla"
//git push