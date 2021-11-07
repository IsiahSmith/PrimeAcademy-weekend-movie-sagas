import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function MovieItem({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const goToDetails = () => {
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        dispatch({ type: 'SELECTED_ID', payload: movie.id })
        history.push('/details');
    }

    return (
        <Paper
            sx={{
                margin: 'auto'
            }}
        >
            <Container
                sx={{
                    width: 300,
                    padding: 5,
                    margin: 1,
                    backgroundColor: 'pink',
                    '&:hover': {
                        opacity: [0.7],
                    },
                }}
            >
                <div>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title} onClick={goToDetails} />
                </div>
            </Container>
        </Paper>
    )
}

export default MovieItem;