import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
     <h1> Actors Page:  </h1>
     { actors.map((actor)=>{
       return(
         <div className="actor">
           <h2>{ actor.name }</h2>
           <p><b>Movies:</b> { actor.movies.join(", ") }</p>
         </div>
       )
     })}
    </div>
  );
};

export default Actors;
