import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {
    let [title, setTitle] = useState('')
    let [poster, setPoster] = useState('')
    let [description, setDescription] = useState('')
    let [genre_id, setGenre_id] = useState('')

    const dispatch = useDispatch();

    const genreList = useSelector(store => store.allGenres);

    const handleInputs = () => {
        dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description, genre_id } })
    }
    console.log('Genres are', genreList);
    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleInputs}>
                <input
                    type="text"
                    value={title}
                    placeholder="Movie Title"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    value={poster}
                    placeholder="Movie Poster URL"
                    onChange={(event) => setPoster(event.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    placeholder="Movie Description"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <select
                    value={genre_id}
                    onChange={(event) => setGenre_id(event.target.value)}>
                    <option hidden='hidden'>
                        Select a Genre
                    </option>
                    {genreList.map((genre) => {
                        return (
                        <option
                            key={genre.id}
                            value={genre.id}>
                            {genre.name}
                        </option>)
                    })}
                </select>
                <input type='submit' value='Add Movie' />
            </form>
        </div>
    )
}

export default AddMovie;