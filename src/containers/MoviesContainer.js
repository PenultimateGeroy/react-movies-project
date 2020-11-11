import React, { Component } from "react";
import TitleCard from "../components/TitleCard";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getMovies } from "../services/api";
import Loading from "../components/Loading"
import Form from "../components/Form"

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      isLoaded: true,
      value: "now_playing",
      searchedTitle: '',
      searchType: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    // this.fetchResults = this.fetchResults(this);
  }
  componentDidMount() {
    getMovies(this.state.value).then(
      (response) => {
        this.setState({
          titles: response,
          isLoaded: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({
      value: value,
    });
    getMovies(value).then(
      (response) => {
        this.setState({
          titles: response,
          isLoaded: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };
  handleInputChange = searchedTitle => {
    this.setState({
      searchedTitle: searchedTitle
    })
    
  }
  handleSearchTypeChange = searchType => {
    this.setState({
      searchType: searchType
    })
    
  }
  fetchTitles = () => {
    
    alert("select Results tab first")

  }

  render() {
    const { titles } = this.state;

    return (
      <main className="movies-main">
        <Form
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchTitles}
            onSearchTypeChange={this.handleSearchTypeChange}
          />
        <div className="title-box">
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              label="Category"
            >
              <MenuItem value="now_playing">Now Playing</MenuItem>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="top_rated">Top Rated</MenuItem>
              <MenuItem value="upcoming">Upcoming</MenuItem>
            </Select>
          </FormControl>
          {this.state.isLoaded ? <Loading /> 
          :
           <div className="movies-cards">
            {titles.map((item) => (
              <TitleCard
                key={item.id}
                info={{
                  title: `${item.title}`,
                  date: `${item.release_date}`,
                  popularity: `${item.popularity}`,
                  overview: `${item.overview}`,
                  imgUrl: `${item.poster_path}`,
                  id: `${item.id}`,
                }}
              />
            ))}
          </div>}
          
        </div>
      </main>
    );
  }
}
export default MoviesContainer;
