import React, { useEffect } from "react";
import "./Home.css";
import MovieList from "../MovieList/MovieList";

const Home = () => {
    return(
        <div className="home">
            <div className="banner-img"></div>
            <MovieList />
        </div>
    )
}