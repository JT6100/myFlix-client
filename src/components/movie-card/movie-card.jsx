import React from 'react';

export class MovieCard extends React.Component {
    render() {
        
    const { movie } = this.props;
    return <div className="movie-card" [WE NEED TO ADD onClick HERE]>{movie.Title}</div>;
  }
}