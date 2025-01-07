import GenreButton from '../genreButton/GenreButton';
import MovieItem from '../movieItem/MovieItem';
import SearchBar from '../searchBar/SearchBar';
import './MovieList.css'
import { IMovie } from '../../../interfaces/IMove';


interface PropsMovieList {
    movies: IMovie[]
}

const MovieList: React.FC<PropsMovieList> = ({movies}) => {
    return ( 
        <section className='movie-list'>
            <SearchBar />
            <GenreButton genreName={genre.name}/>

            <section>
                {
                    movies.map((item) => (
                        <MovieItem key={item.id} item={item} />
                    ))
                }
            </section>
        </section>
    );
}

export default MovieList