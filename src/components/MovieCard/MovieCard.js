import React from 'react';
import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import "./MovieCard.css";
// import '../../App.css';
import './MovieCard.css';

export default function MovieCard(props){
    const {data} = props;
    console.log("data => ",data);
    return(<div className="card-item">
    
         <div className="card-top">
          <img src={data.poster_path} alt={data.title} />
          <div className='card-info'>
            <h2 className="movie-title">{data.title}</h2>
            <p>{data.release_date}</p>
            </div>
            </div>
            
      
      
  </div>)
};

  // return(
  //   <Card style={{ width: '5rem' }}>
  //     <Card.Img variant="top" src={data.poster_path} />
  //     <Card.Body>
  //       <Card.Title>{data.title}</Card.Title>
  //       <Card.Text></Card.Text>
  //       </Card.Body>
  //       <ListGroup className="list-group-flush">
  //       <ListGroup.Item>{data.release_date}</ListGroup.Item>
  //     </ListGroup>
  //     </Card>
  // )





