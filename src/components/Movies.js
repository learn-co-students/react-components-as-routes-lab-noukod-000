import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
    { movies.map((movie)=>{
          return(
            <div>
              <h3>{ movie.title }</h3>
              <p>Time: { movie.time }</p>
              <p>Genres: { movie.genres.join(", ") }</p>
              <p>Metascore: { movie.metascore }</p>
            </div>
          )
     })}
    </ul>
    </div>
  );
};

export default Movies;
