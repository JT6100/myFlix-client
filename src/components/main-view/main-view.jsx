import React from "react";
import { MovieCard } from "../movie-card/movie-card";

export class MainView extends React.component {

    constructor(){
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Iception', description : 'desc1...', ImagePath: '...'},
                { _id: 2, Title: 'The Shawshank redemption', description : 'desc2...', ImagePath: '...'},
                { _id: 3, Title: 'Gladiator', description : 'desc3...', ImagePath: '...'},
            ]
        }
    }

    render() {

        const { movies } = this.state;

        if (movies.length === 0) return <div className="main-view">The list is Empty!</div>;

        return (
            
            <div className="main-view">
                {movies.map(movie => <MovieCard />)}
            </div>
           
        );
       }
}

export default MainView;