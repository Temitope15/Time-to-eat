import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BooksList from "./pages/booksList";
import DiaryPages from "./pages/diaryPage";

const App =() =>{
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/book-list" element={<BooksList/>} />
          <Route path="/diary/:id" element={<DiaryPages/>} />
        </Routes>
    </Router>
  )
}
export default App