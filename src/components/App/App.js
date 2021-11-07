import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function App() {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GENRE_LIST' });
  })

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details">
          <Details />
        </Route>
        <Route path="/addMovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
