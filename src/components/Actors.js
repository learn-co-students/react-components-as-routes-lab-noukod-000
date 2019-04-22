import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div class="actors">
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>{actor.name}</h3>
          <p>Actors</p>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
