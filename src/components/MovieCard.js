import React from "react";
import '../styles.css'

export default function MovieCard({ movie, isWatchListed, toggleWatchlist }) {

    const handleImageMissingError = (e) => {
        e.target.src = 'images/default.jpg';
    }

    const getRatingClass = (rating) => {
        if (rating >= 8) {
            return 'rating-good';
        } else if (rating >= 5) {
            return 'rating-ok';
        } else {
            return 'rating-bad';
        }
    }
    

    return (
        <div className="movie-card" key={movie.id}>
            <img 
                src={`images/${movie.image}`} 
                alt={movie.title} 
                onError={handleImageMissingError} 
            />
            <h3 className="movie-card-title">{movie.title}</h3>
            <div className="movie-card-info">
                <div>
                    <span className="movie-card-genre">{movie.genre}</span>
                    <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</span>
                </div>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={isWatchListed} 
                        onChange={() => toggleWatchlist(movie.id)}
                    />
                    <span className="slider">
                        <span className="slider-label">{isWatchListed ? "In Watchlist" : "Add to Watchlist"}</span>
                    </span>
                </label>
            </div>
        </div>  
    );
}