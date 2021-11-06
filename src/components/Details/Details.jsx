import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function Details () {
    const genres = useSelector(store => store.genres);
    const movies = useSelector(store => store.movies)
    const selectedId = useSelector(store => store.selectedId)


    let selectedMovie = movies.filter(movie => movie.id === selectedId)

    useEffect(() => {

    })
console.log('selectedMovie', selectedMovie);
console.log('genres', genres);
console.log('movies', movies);
console.log('id', selectedId);
    return (
        <>
        {selectedMovie.title ? (
        <div>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.poster} />
            <p>{selectedMovie.description}</p>
        </div>) : (<p>no movie selected</p>)}

        {genres.map(genre => genre.name).join(', ')}
        </>
    )
}

export default Details;