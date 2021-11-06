import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const goToDetails = () => {
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        dispatch({type: 'SELECTED_ID', payload: movie.id})
        history.push('/details');
    }

    return (
        <div>
            <div>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
            <button onClick={goToDetails}>Details</button>
        </div>
    )
}

export default MovieItem;