import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(director => <div>{director.name} {director.movies.map(movie => <h5>{movie}</h5>)} 
      </div>)}
      </div>
  );
}

export default Directors;
