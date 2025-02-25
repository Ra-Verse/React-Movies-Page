import "../css/MovieCard.css"
import { useMovieContext } from "../css/contexts/MovieContexts"

function MovieCard({movie}) {
    const {addToFavorites, removeFromFavorites, isFavorite} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function OnFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={MovieCard.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={OnFavoriteClick}>
                    ♥
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    </div>
}

export default MovieCard