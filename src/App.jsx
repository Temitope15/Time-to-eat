import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BooksList from "./pages/booksList";
import DiaryPages from "./pages/diaryPage";
import NotFound from "./components/NotFound";
import BookDescription from "./components/BookDescription";
import Footer from "./components/footer";
import Diary from "./pages/diary";
import AboutBanjo from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

const App =() =>{
  return(
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="book-list" element={<BooksList/>}/>
          <Route path="/book-list/:bookId" element={<BookDescription/>} />
          <Route path="/diary" element={<Diary/>} />
          <Route path="/about" element={<AboutBanjo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diary/:id/" element={<DiaryPages/>} />
         
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
    </Router>
  
  )
}
export default App