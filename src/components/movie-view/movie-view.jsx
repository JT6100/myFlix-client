import React from 'react';

export class MovieView extends React.Component {

    keypressCallback(event) {
        console.log(event.key);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }


    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className='movie-view'>
                <div className='movie-poster'>
                    <img src={movie.Imagepath} />
                    </div>
                    <div className='movie-title'>
                        <span className='label'>Title: </span>
                        <span className='value'>{movie.Title}</span>
                        </div>
                        <div className='movie-description'>
                            <span className='label'>Descriton: </span>
                            <span className='value'>{movie.Description}</span>
                            </div>
                            <button onClick={onBackClick}>Back</button>

                            </div>
        );
    }
}