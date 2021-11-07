import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddMovie() {
    let [title, setTitle] = useState('')
    let [poster, setPoster] = useState('')
    let [description, setDescription] = useState('')
    let [genre_id, setGenre_id] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();
    const genreList = useSelector(store => store.allGenres);

    const handleInputs = () => {
        dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description, genre_id } })
        history.push('/')
    }

    return (
        <div>
            <h1>Add Movie <span><Button variant='outlined' onClick={() => history.push('/')}>Cancel</Button></span></h1>
            <form onSubmit={handleInputs}>
                <TextField
                    sx={{ m: 1}}
                    id="outlined-basic"  
                    label="Movie Title" 
                    variant="outlined"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    sx={{ m: 1}}
                    id="outlined-basic" 
                    label="Movie Poster URL" 
                    variant="outlined"
                    type="text"
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)}
                />
                <TextField
                    sx={{ m: 1, width: '40ch' }}
                    id="outlined-basic" 
                    variant="outlined"
                    multiline rows='5'
                    type="text"
                    value={description}
                    label="Movie Description"
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
                <Button type='submit' value='Save' variant='outlined'>Save</Button>
            </form>
        </div>
    )
}

export default AddMovie;