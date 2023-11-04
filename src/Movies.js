import React from 'react'
import {NavLink} from 'react-router-dom'
import { useGlobleContext } from './context'
import "./App.css"
const Movies = () => {
  const {movie,isLoading}=useGlobleContext();
   
  if(isLoading){
    return (
      <div className=''>
        <div className='loading'>Loading...</div>
      </div>
    )
   }

  return (
    <section className='movie-page'>
        <div className='container grid grid-4-col'>
        {movie.map((curMovie)=>{
             const {imdbID,Title,Poster}=curMovie;
             const movieName=Title.substring(0,15);
             return (
              <NavLink to={`movie/${imdbID}`}>
              <div className="card">
                <div className="card-info">
                   <h2>{movieName.length>=15?`${movieName}...`  : movieName}</h2>
                   <img src={Poster} alt={imdbID}  />
                </div>
              </div>
             </NavLink>
             )
        })}
        </div>
       </section>
  );
}

export default Movies