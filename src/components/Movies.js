import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(movie => <div className="actor"> 
        { movie.title }
        { movie.metascore } 
        {movie.time} 
        {movie.genres.map(genre => <h5>{genre}</h5>)}
        </div>)}
    </div>	    
    
  );
};

export default Movies;
