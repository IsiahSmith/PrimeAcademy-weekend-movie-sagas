import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie() {
    let [title, setTitle] = useState('')
    let [poster, setPoster] = useState('')
    let [description, setDescription] = useState('')
    let [genre_id, setGenre_id] = useState('')

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    const handleInputs = () => {
        dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description, genre_id } })
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleInputs}>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <select
                    value={owner_id}
                    onChange={(event) => setGenre_id(event.target.value)}>
                    {genres.map((genre) => (
                        <option
                            key={genre.id}
                            value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <input type='submit' value='Add Movie' />
            </form>
        </div>
    )
}

export default AddMovie;