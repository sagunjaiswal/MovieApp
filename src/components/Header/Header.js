import React, {useEffect, useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import './Header.css';
import { Link } from "react-router-dom";
import {setMovies} from '../redux/actions/movieAction';



export default function Header (){
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovies.movies);
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") alert("please enter search term!");
    // dispatch(fetchAsyncMovies(term));
    const searchResult = movies.filter((movie) => {
      console.log("movie title",movie.title);
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log("iiii",movies);
    console.log("search result", searchResult);
    setSearchRes(searchResult);
    dispatch(setMovies(searchResult));
    console.log("isarray",Array.isArray(searchResult));
    console.log("search res",searchRes);
    
  }
  
  
  


  // else if(response.data.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
  // const filteredResponse = res.filter(response.)

 
  
    return(
        <div className="header">
      <Link className="logo" to="/">
        <span>Movie</span>App
      </Link>

      <div className="searchArea">
        <p className="searchBoxLabel">Find your movie</p>
        <br/>
        <form onSubmit={submitHandler}>        
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Movie"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          
          <button type="submit" className="submitBtn" onClick={submitHandler}>
            Search
          </button>
          
        </form>
      </div>
    </div>
    )
}