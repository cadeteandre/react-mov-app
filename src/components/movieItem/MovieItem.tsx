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
        <article>
            <div>
                <img
                    src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={`${movie.original_title} poster`}
                />
                <div>
                    <div>
                        <h3>{movie.title}</h3>
                        <img src="/svg/Favourite.svg" alt="" />
                    </div>
                    <div>
                        <div>
                            <img src="/images/RatingStar.png" alt="" />
                            <p>{movie.vote_average.toFixed(1)}</p>
                        </div>
                        <p>•</p>
                        <p>{`${movie.release_date}`}</p>
                        <p>•</p>
                        <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
                        <p>•</p>
                        <p>{convertRuntime(movie.runtime)}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MovieItem;