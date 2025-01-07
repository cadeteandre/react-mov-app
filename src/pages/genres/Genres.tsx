import { IMovie } from "../../../interfaces/IMove";
import Footer from "../../components/footer/Footer";
import MovieList from "../../components/movieList/MovieList";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Genres.css";

interface GenreProps{
    movies: IMovie[]
}

const Genres:React.FC<GenreProps> = ({movies}) => {
    return (  
        <>
            <SearchBar/>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <section>
                <MovieList movies={movies}/>
            </section>
            <Footer/>
        </>
    );
}

export default Genres;