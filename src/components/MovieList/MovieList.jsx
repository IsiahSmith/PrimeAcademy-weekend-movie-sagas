import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList <span><Button variant='outlined' onClick={() => history.push('/addMovie')}>Add a Movie</Button></span></h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem 
                        key={movie.id}
                        movie={movie}
                        />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;