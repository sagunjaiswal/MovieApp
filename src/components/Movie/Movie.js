import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from 'react-redux/es/exports';
import { Link } from "react-router-dom";

export default function Movie ()  {
    const movies = useSelector((state) => state.allMovies.movies);
    console.log("MOBIES",movies);
    
    let http;
    return(
        
    <div className="movie-wrapper">
    <div className="movie-list">
    <div className="movie-container">
        {movies.map((movie) => (
            movie.title != "Zootopia" ?
            <Link to={`/movie/${movie.id}`}>
            <MovieCard key={movie.id} data={movie} />
            </Link>: <></>
        ))}
        </div>
        </div>
        </div>
        
    )
}