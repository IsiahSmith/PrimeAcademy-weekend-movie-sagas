import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Details() {
    const genres = useSelector(store => store.genres);
    const movies = useSelector(store => store.movies)
    const selectedId = useSelector(store => store.selectedId)
    const history = useHistory();

    let selectedMovie = movies.filter(movie => movie.id === selectedId)
    selectedMovie = selectedMovie[0]

    console.log('selectedMovie', selectedMovie);
    console.log('genres', genres);
    console.log('movies', movies);
    console.log('id', selectedId);
    return (
        <>
            {selectedMovie ? (
                <div>
                    <h2>{selectedMovie.title}</h2>
                    <p>Genre(s): <span>{genres.map(genre => genre.name).join(', ')}</span></p>
                    <img src={selectedMovie.poster} />
                    <p>{selectedMovie.description}</p>
                </div>) : (<p>no movie selected</p>)}
            <Button variant='outlined' onClick={() => history.push('/')}>Back to List</Button>
        </>
    )
}

export default Details;