import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(movie =>
          <div key={movie.title}>
            <h1>Name: {movie.title}</h1>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
          </div>)}
    </div>
  );
};

export default Movies;
