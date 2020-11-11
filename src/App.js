import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResultsContainer from './containers/SearchResultsContainer';
import MoviesContainer from "./containers/MoviesContainer";
import TVShowsContainer from "./containers/TVShowsContainer";
import Tabs from "./containers/Tabs";

const App = () => (
  <Router>
  <div className="App">
    <header className="App-header">
      <h1>React Movies Project</h1>
    </header>
    <Tabs />
    <Switch>
      <Route path="/" exact component={MoviesContainer} />
      <Route path="/movies" exact component={MoviesContainer} />
      <Route path="/results" component={SearchResultsContainer} />
      <Route path="/tvshows" component={TVShowsContainer} />
    </Switch> 
  </div>
  </Router>
)

export default App;
