import React, { Component } from 'react'
import Form from '../components/Form'
import Loading from '../components/Loading'
import TitleCard from '../components/TitleCard'
import { getTitles } from '../services/api'

class SearchResultsContainer extends Component {
  state = {
    searchedTitle: '',
    isLoaded: true,
    searchType: '',
    titles: [],
    // isLoading: false
  }

  fetchTitles = e => {
    const { searchedTitle, searchType } = this.state
    e.preventDefault()

    // this.setState({
    //   isLoading: true
    // })

    getTitles (searchType, searchedTitle).then(
      titles => {
        this.setState({
          titles,
          // isLoading: false
          isLoaded: false,
        })

      if (titles.length === 0) {
        this.setState({
            isLoaded: true,
        });
        document.getElementById("no-results").innerHTML = "Sorry, there were no results"
        }
      },
      error => {
        alert('Error', `Something went wrong! ${error}`)
      }
    )
  }

  handleInputChange = searchedTitle => {
    this.setState({
      searchedTitle: searchedTitle,
      isLoaded: true
    })
  }

  handleSearchTypeChange = searchType => {
      this.setState({
          searchType
      })
  }

  render() {
    const { titles, isLoaded, searchType } = this.state
    
    if (isLoaded === true) {
        return (
          <div>
            <Form
              onInputChange={this.handleInputChange}
              onSubmit={this.fetchTitles}
              onSearchTypeChange={this.handleSearchTypeChange}
            />
            <div id="no-results" className="results-text">
                Please enter a search
            </div>
          </div>
        )
    } else if (isLoaded === false && searchType === "tv") {
        return (
            <div>
                <Form
                    onInputChange={this.handleInputChange}
                    onSubmit={this.fetchTitles}
                    onSearchTypeChange={this.handleSearchTypeChange}
                />
                
                <div className="result-cards">
                    {titles.map((item) => (
                    <TitleCard
                        key = {item.id}
                        info = {{
                        title: `${item.name}`,
                        date: `${item.first_air_date}`,
                        popularity: `${item.popularity}`,
                        overview: `${item.overview}`,
                        imgUrl: `${item.poster_path}`,
                        id: `${item.id}`
                        }}
                    />
                    ))}
                </div>
            </div>
        )
    } else if (isLoaded === false) {
        return (
          <div>
            <Form
                onInputChange={this.handleInputChange}
                onSubmit={this.fetchTitles}
                onSearchTypeChange={this.handleSearchTypeChange}
            />
            
            <div className="result-cards">
                {titles.map((item) => (
                <TitleCard
                    key = {item.id}
                    info = {{
                    title: `${item.name}`,
                    date: `${item.first_air_date}`,
                    popularity: `${item.popularity}`,
                    overview: `${item.overview}`,
                    imgUrl: `${item.poster_path}`,
                    id: `${item.id}`
                    }}
                />
                ))}
            </div>
          </div>
        )    
    }
  }
}

export default SearchResultsContainer
