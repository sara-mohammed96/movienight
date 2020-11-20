import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import FooterBar from './Footer'

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <Navbar handleMovies={setMovies} />
      <Main movies={movies} />
     <FooterBar />
    </>
  );
}
export default App;