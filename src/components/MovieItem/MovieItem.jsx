import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const goToDetails = () => {
        dispatch({type: 'FETCH_DETAILS', payload: movie})
        // history.push('/details');
    }

    return (
        <>
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
        <button onClick={goToDetails}>Details</button>
        </>
    )
}

export default MovieItem;