import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import './MovieDetail.css';
import { selectedMovie, removeSelectedMovie } from "../redux/actions/movieAction";
import axios from "axios";
import { Link } from "react-router-dom";


export default function MovieDetail(){
    const movie = useSelector((state) => state.movie);
    const {id} = useParams();
    const dispatch = useDispatch();
    console.log("=> => ",movie);
    const fetchMovieDetail = async() => {
        const response = await axios.get(`https://reactjs-cdp.herokuapp.com/movies/${id}`).catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectedMovie(response.data));
    }
    useEffect(() => {
        if(id && id !== "")
            fetchMovieDetail();
        return() => {
            dispatch(removeSelectedMovie());
        }
    },[id]);
    return (
        <>
        <div className="movie">
        <Link className="logo" to="/">
        <span>Movie</span>App
      </Link>
        <div className="movie-section">
        <div className="section-left">
              <img src={movie.poster_path} alt={movie.title} />
            </div>
            <div className="section-right">
              <div className="movie-intro">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-ratings">{movie.vote_average}</div>
              </div>
              <div className="movie-awards">Revenue : {movie.revenue}</div>
              <div className="movie-info">
                <div className="release-year">
                  <span className="year-of-release">{movie.release_date}</span> 
                </div>
                <div className="runtime">
                  <span className="total-runtime">{movie.runtime}</span> min
                </div>
              </div>
              <div className="movie-details">{movie.overview}</div>
            </div>
            </div>
            </div>
            </>
            
    )
}