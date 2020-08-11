import React from "react";
import axios from "axios";
import Movie from "./Movie";
// import propTypes from "prop-types";

// const foodILike = [
//   {
//     id: 1,
//     name: "a",
//     picture:
//       "https://www.google.com/search?q=%EA%B9%80%EC%B9%98&newwindow=1&sxsrf=ALeKk030w_HuBRBt-LYdixpumM9SJXSOLg:1597126299746&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiFzoeOv5LrAhUpGqYKHQvHBpcQ_AUoAXoECBoQAw&biw=849&bih=602",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "b",
//     picture:
//       "https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&newwindow=1&sxsrf=ALeKk00QtrvRrp_cTOir4k1NakYl5scI7g:1597126283834&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMpryGv5LrAhVEPnAKHUxjBAQQ_AUoAXoECA4QAw&biw=1920&bih=937",
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: "c",
//     picture:
//       "https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&newwindow=1&sxsrf=ALeKk00QtrvRrp_cTOir4k1NakYl5scI7g:1597126283834&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMpryGv5LrAhVEPnAKHUxjBAQQ_AUoAXoECA4QAw&biw=1920&bih=937",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "d",
//     picture:
//       "https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&newwindow=1&sxsrf=ALeKk00QtrvRrp_cTOir4k1NakYl5scI7g:1597126283834&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMpryGv5LrAhVEPnAKHUxjBAQQ_AUoAXoECA4QAw&biw=1920&bih=937",
//     rating: 5.5,
//   },
//   {
//     id: 5,
//     name: "e",
//     picture:
//       "https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&newwindow=1&sxsrf=ALeKk00QtrvRrp_cTOir4k1NakYl5scI7g:1597126283834&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMpryGv5LrAhVEPnAKHUxjBAQQ_AUoAXoECA4QAw&biw=1920&bih=937",
//     rating: 4.7,
//   },
// ];

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>i like {name}</h1>
//       <h4>{rating / 5.0}</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: propTypes.string.isRequired,
//   picture: propTypes.string.isRequired,
//   rating: propTypes.number.isRequired,
// };

// function App() {
//   return (
//     <div>
//       {" "}
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.picture}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("constructor");
//   }
//   state = {
//     count: 0,
//   };

//   // mount되고 호출되는 함수
//   componentDidMount() {
//     console.log("component rednered");
//   }

//   // redner되고 호출되는 함수
//   componentDidUpdate() {
//     console.log("component updated");
//   }

//   add = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   minus = () => {
//     this.setState((current) => ({ count: current.count - 1 }));
//   };

//   // react는 render method를 자동으로 실행한다.
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}> Add </button>
//         <button onClick={this.minus}> Minus </button>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
        ; }}
      </div>
    );
  }
}
export default App;
