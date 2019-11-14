import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(actor => (
        <div className="actor">
          <p>{actor.name}</p>
          {actor.movies.map(movie => (
              <p>{movie}</p>
          ))}
        </div>)
      )}
    </div>
  );
};

export default Actors;
