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
    movie: Proptypes.shape({
        Title: PropTypes.string}).isRequired,
        onMovieClick: PropTypes.func.isRequired
};