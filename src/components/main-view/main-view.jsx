import React from "react";
import axios from "axios";
import { Loginview } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import '../../index.scss';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [],
            selectedMovie: null
        };
    }

    componentDidMount(){
        axios.get('https://movieapi6100.herokuapp.com/')
        .then(response => {
            this.setState({
                movies: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    setSelectedMovie = (movie) => {
        this.setState({ selectedMovie: movie})
    }

    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie, user } = this.state;

        if (!user) return <Loginview onLoggedIn={user => this.onLoggedIn(user)} />;
      
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
      
        return (
            <div className="main-view">
              {selectedMovie
                ? <MovieView movie={selectedMovie} onBackClick={() => this.setSelectedMovie(null)}/>
                : movies.map(movie => (
                  <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                ))
              }
            </div>
        );
      }
}

export default MainView;