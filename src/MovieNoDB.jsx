import { useState } from "react";
import "./App.css";

function MovieNoDB() {
  // variable to store all movies
  const [moviesList, setMoviesList] = useState([]);
  // useState for text input values
  const [movieForm, setMovieForm] = useState({
    name: "",
    poster: "",
    year: 2024,
    rating: 5,
    cast: [],
    sypnosis: "",
  });

  // useState for cast text input values
  const [castTextInput, setCastTextInput] = useState("");

  // adds current text input values to db
  function submit() {
    setMoviesList([...moviesList, movieForm])
    setMovieForm({
      name: "",
      poster: "",
      year: 2024,
      rating: 5,
      cast: [],
      sypnosis: "",
    });
  
  }
  return (
    <>
      <h1>Movie List</h1>

      <label>
        Movie Name:
        <input
          type="text"
          value={movieForm.name}
          onChange={(e) => setMovieForm({ ...movieForm, name: e.target.value })}
        />
      </label>

      <label>
        Movie Poster:
        <input
          type="text"
          value={movieForm.poster}
          onChange={(e) =>
            setMovieForm({ ...movieForm, poster: e.target.value })
          }
        />
      </label>

      <label>
        Year Release:
        <select
          name="year"
          id="year"
          value={movieForm.year}
          onChange={(e) => setMovieForm({ ...movieForm, year: e.target.value })}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </label>

      <label>
        Movie Rating:
        <input
          type="range"
          min={0}
          max={10}
          value={movieForm.rating}
          onChange={(e) =>
            setMovieForm({ ...movieForm, rating: e.target.value })
          }
        />
      </label>

      <label>
        Movie Cast:
        <input
          type="text"
          value={castTextInput}
          onChange={(e) => setCastTextInput(e.target.value)}
        />
        <button
          onClick={() => {
            setMovieForm({
              ...movieForm,
              cast: [...movieForm.cast, castTextInput],
            });
            setCastTextInput("");
          }}
        >
          Add
        </button>
      </label>

      <h4>Movie Cast:</h4>
      <ul>
        {movieForm.cast.map((cast, index) => (
          <li key={index}>{cast}</li>
        ))}
      </ul>

      <label>
        Sypnosis:
        <textarea
          rows={3}
          value={movieForm.sypnosis}
          onChange={(e) =>
            setMovieForm({ ...movieForm, sypnosis: e.target.value })
          }
        />
      </label>
      <button onClick={submit}>Submit</button>

      {moviesList.map((movie, index) => (
        <li key={index}>
          {movie._id} {movie.name}
        </li>
      ))}
    </>
  );
}

export default MovieNoDB;
