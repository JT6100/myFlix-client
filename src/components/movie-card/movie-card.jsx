import React from 'react';
import Proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MovieView } from '../movie-view/movie-view';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
   <Card>
       <Card.Img variant="top" src={movie.ImagePath} />
       <Card.Body>
           <Card.Title>{movie.Title}</Card.Title>
           <Card.Text>{movie.Description}</Card.Text>
           <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
           </Card.Body>
           </Card>
    );
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Genre: Proptypes.shape({
          Name: Proptypes.string.isRequired,
      })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };