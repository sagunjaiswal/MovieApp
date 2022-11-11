import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer (){
    return(
        <div className="footer">
      <Link className="footerLogo" to="/">
        <span>Movie</span>App
      </Link>
    </div>
    )
}