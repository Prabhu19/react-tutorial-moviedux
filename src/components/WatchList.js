import React from "react";
import '../styles.css';
import MovieCard from "./MovieCard";

export default function WatchList({movies, watchlist, toggleWatchlist}) {
    return (
        <div>
            <h1 className="title">Watchlist Page!!</h1>
            <div className="watchlist">
                {
                    watchlist.map(movieId => {
                        const movie = movies.find(movie => movie.id === movieId);
                        return <MovieCard 
                            key={movie.id}
                            movie={movie}
                            isWatchListed={true}
                            toggleWatchlist={toggleWatchlist}
                        />  
                    })
                }

            </div>
        </div>
    );
}