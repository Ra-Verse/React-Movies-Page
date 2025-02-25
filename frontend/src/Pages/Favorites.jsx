import "../css/Favorites.css"
import { useMovieContext } from "../css/contexts/MovieContexts"
import MovieCard from "../components/MovieCard"


function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites) {
        return (
          <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        );
      }
          
    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies</h2>
        </div>
    )
}

export default Favorites