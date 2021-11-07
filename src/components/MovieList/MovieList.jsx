import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={() => history.push('/addMovie')}>Add a Movie</button>
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