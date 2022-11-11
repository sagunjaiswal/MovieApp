import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { setMovies } from "../redux/actions/movieAction";
import Movie from '../Movie/Movie';
import './MovieList.css';

const MovieList = () => {
    const movies = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchMovies = async() => {
        const response = await axios.get(`https://reactjs-cdp.herokuapp.com/movies/`).catch((err) => {
            console.log("err",err);
        });
        console.log("00",response.data.data);
        dispatch(setMovies(response.data.data));
        
    }
    console.log(movies);

    useEffect(() => {
        fetchMovies();
    },[]);
    console.log("Movies",movies);
    return(
        <div className="container">
            <Movie/>
        </div>
    )
}
export default MovieList;