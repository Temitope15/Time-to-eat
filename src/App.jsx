import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BooksList from "./pages/booksList";
import DiaryPages from "./pages/diaryPage";
import NotFound from "./components/NotFound";
import BookDescription from "./components/BookDescription";

const App =() =>{
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="book-list" element={<BooksList/>}/ >
          <Route path="/book-list/:bookId" element={<BookDescription/>} />
    
          <Route path="/diary/:id" element={<DiaryPages/>} />
         
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  )
}
export default App