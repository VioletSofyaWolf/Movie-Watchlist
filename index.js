'use strict';

const searchInput = document.getElementById('search-input');
const movieCard = document.getElementById('movie-card');

const getMovies = async (e) => {
  e.preventDefault();

  const response = await fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=6e6080f3`);
  const data = await response.json();

  movieCard.innerHTML = `
    <div>
    <img src=${data.Poster} />
    </div>

    <div class="movie-card-content">
    <h3>${data.Title}</h3>
    <p>${data.imdbRating}</p>
    <p>${data.Runtime}</p>
    <p>${data.Genre}</p>
    <button>Watchlist</button>
    <p>${data.Plot}</p>
    </div>
  `;

  console.log(data);
};

document.getElementById('search-btn').addEventListener('click', getMovies);

// {Title: 'Underworld', Year: '2003', Rated: 'R', Released: '19 Sep 2003', Runtime: '121 min', …}
// Actors: "Kate Beckinsale, Scott Speedman, Shane Brolly"
// Awards: "1 win & 10 nominations"
// BoxOffice: "$51,970,690"
// Country: "United States, United Kingdom, Germany, Hungary"
// DVD: "06 Jan 2004"
// Director: "Len Wiseman"
// Genre: "Action, Fantasy, Thriller"
// Language: "English"
// Metascore: "42"
// Plot: "Selene, a vampire warrior, is entrenched in a conflict between vampires and werewolves, while falling in love with Michael, a human who is sought by werewolves for unknown reasons."
// Poster: "https://m.media-amazon.com/images/M/MV5BMTk1OTc2ZmUtODU0Yy00NGJiLWJmNmQtODI0MzBjODk3MjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "R"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "19 Sep 2003"
// Response: "True"
// Runtime: "121 min"
// Title: "Underworld"
// Type: "movie"
// Website: "N/A"
// Writer: "Kevin Grevioux, Len Wiseman, Danny McBride"
// Year: "2003"
// imdbID: "tt0320691"
// imdbRating: "7.0"
// imdbVotes: "269,119"
// [[Prototype]]: Object
