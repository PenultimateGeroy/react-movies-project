import React, { Component } from "react";
import '../App.css';

class TitleCard extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="card-box">
        <img
          src={`https://image.tmdb.org/t/p/w300/${this.props.info.imgUrl}`}
          alt="React movies project"
        />

        <div className="card-content">
          <h3 className="card-title">{this.props.info.title}</h3>
  
          <p>
            Release Date : {this.props.info.date} | Popularity : {this.props.info.popularity}
          </p>
          <p>{this.props.info.overview}</p>
        </div>
      </div>
      
    );
  }
}

export default TitleCard