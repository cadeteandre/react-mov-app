import Footer from "../../components/footer/Footer";
import MovieList from "../../components/movieList/MovieList";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Genres.css";

const Genres = () => {
    return (  
        <>
            <SearchBar/>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <section>
                <MovieList/>
            </section>
            <Footer/>
        </>
    );
}

export default Genres;