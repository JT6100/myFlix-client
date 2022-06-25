import React from "react";
import { MovieCard } from "../movie-card/movie-card";

export class MainView extends React.component {

    constructor(){
        super();
        this.state = {
            movies: [...],
            selectedMovie: null
        };
    }

    render() {

        const { movies } = this.state;

        if (selectedMovie) return <MovieView movie ={selectedMovie} />;

        if (movies.length === 0) return <div className="main-view">The list is Empty!</div>;

        return (
            
            <div className="main-view">
                {movies.map(movie => <MovieCard />)}
            </div>
           
        );
       }
}

export default MainView;