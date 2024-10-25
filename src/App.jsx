import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import User from "./User";
import Movie from "./Movie";
import MovieNoDB from "./MovieNoDB";

function App() {
  return(
    <>
      <Movie />
      <User />

      {/* <MovieNoDB /> */}
    </>
  );
}

export default App;
