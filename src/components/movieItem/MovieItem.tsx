import { IMovieByID } from '../../../interfaces/IMovieByID';
import './MovieItem.css'

interface PropsItem {
    movie: IMovieByID
}

const convertRuntime = (minutes: number) => { 
    const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60; 
    return `${hours}h ${remainingMinutes}m`; 
}; 

const MovieItem: React.FC<PropsItem> = ({ movie }) => {
    return ( 
        <article className="movie-item">

        <img className='poster'
        src={
            movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={`${movie.original_title} poster`}
        />
    
    <div className="movie-item__content">

        <div className="movie-item__header">
            <h3 >{movie.title}</h3>
            <img src="/svg/Favourite.svg" alt="Add to Favourites" />
        </div>

        <div className="movie-item__details">

            <div className='movie-item__rating'>            
                <img className="movie-item__star" src="/images/RatingStar.png" alt="Rating Star" />
                <p>{movie.vote_average.toFixed(1)}</p>
            </div>



            <p>•</p>
            <p>{`${movie.release_date}`}</p>
            <p>•</p>
            <p>{movie.genres.length > 0 ? movie.genres.slice(0, 2).map((genre) => genre.name).join(", ") : "Unknown Genres"}</p>
            <p>•</p>
            <p>{convertRuntime(movie.runtime)}</p>
        </div>

    </div>
</article>

    );
}

export default MovieItem;