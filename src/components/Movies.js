import React from "react";
import { movies } from "../data";

function Movies() {


  const movieObj = movies.map(movie => {
    const genres = movie.genres.map(genre=> {
      return <li key={genre}>{genre}</li>
    })

    return <div key={movie.title}>
              <h2>{movie.title}</h2>
              <p>Runtime: {movie.time}</p>
              <ul>
                {genres}
              </ul>
          </div>
  })


  return <div>
        <h1>Movies Page</h1>
        {movieObj}
        </div>;
}

export default Movies;
