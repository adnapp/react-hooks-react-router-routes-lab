import React from "react";
import { directors } from "../data";

function Directors() {


const directorObj = directors.map(director=> {
  return <div key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => <li key={movie}>{movie}</li>)}

            </ul>

        </div>

})


  console.log(directors)
  return <div>
            <h1>Directors Page</h1>
            {directorObj}
         </div>;
}

export default Directors;
