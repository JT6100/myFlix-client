import React from 'react';
import Proptypes from 'prop-types';
import { MovieView } from '../movie-view/movie-view';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
    <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>
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