import { useState } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <h1 className="font-primary block text-2xl"></h1>
      </div>
      <div>
        <FaSearch style={{ color: "red", fontSize: "50px" }} />
      </div>
    </div>
  );
}

export default App;


// git pull origin master
//npm run dev
//git add .
// git commit -m "bla bla bla"
//git push