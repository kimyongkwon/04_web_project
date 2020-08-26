import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        // <div>
        //   <span>{location.state.title}</span>
        // </div>
        <div className="movie__detail">
          <button className="movie__detail__back">
            <Link to="/">
              <i class="fas fa-undo-alt"></i>
            </Link>
          </button>
          <div className="movie__detail__data">
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <h3 className="movie__detail__title">{location.state.title}</h3>
            <h5 className="movie__detail__year">{location.state.year}</h5>
            <ul className="movie__detail__genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres__detail__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__detail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
