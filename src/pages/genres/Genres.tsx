import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Genres.css";
import getMoviesByGenre from "../../utils/fetches/getMoviesByGenre";
import { IMovieByID } from '../../../interfaces/IMovieByID';
import MovieItem from "../../components/movieItem/MovieItem";
import { Link, useParams } from "react-router-dom";
import { IGenres } from "../../../interfaces/IGenres";
import getAllGenres from "../../utils/fetches/getAllGenres";
import GenreButton from "../../components/genreButton/GenreButton";


const Genres:React.FC = () => {

    const { genreID } = useParams();

    const [moviesByID, setMoviesByID] = useState<IMovieByID[] | null>(null);
    const [genre, setGenre] = useState<IGenres | null>(null);

    useEffect(() => {
        getAllGenres(setGenre);
    }, [])

    useEffect(() => {
        if(genreID) getMoviesByGenre(Number(genreID), setMoviesByID);
    }, [genreID])

    return (  
        <>
            <SearchBar/>
            <div className="genres__container">
                {genre?.genres.map((genre) => (
                    <Link key={genre.id} to={`/home/genre/${genre.id}`}>
                        <GenreButton key={genre.id} genreName={genre.name}/>
                    </Link>
                ))}
            </div>
            <section className='movie-list'>
                {
                    moviesByID?.map((movie) => (
                        <Link to={`/detail/${movie.id}`}>
                            <MovieItem key={movie.id} movie={movie} />
                        </Link>
                    ))
                }
            </section>
            <Footer/>
        </>
    );
}

export default Genres;