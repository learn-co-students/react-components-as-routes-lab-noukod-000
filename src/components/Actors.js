import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {actors.map(actor =>
          <div key={actor.name}>
            <h1>Name: {actor.name}</h1>
            <p>Movies:</p>
            <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
          </div>)}
    </div>
  );
};

export default Actors;
