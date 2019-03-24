import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1> Directors Page:  </h1>
     { directors.map((director)=>{
       return(
         <div className="director">
           <h2>{ director.name }</h2>
           <p><b>Movies:</b> { director.movies.join(", ") }</p>
         </div>
       )
     })}
    </div>
  );
};

export default Directors;