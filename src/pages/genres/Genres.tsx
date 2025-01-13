import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Genres.css";
import getMoviesByGenre from "../../utils/fetches/getMoviesByGenre";
import { IMovieByID } from '../../../interfaces/IMovieByID';
import MovieItem from "../../components/movieItem/MovieItem";
import { NavLink, useParams } from "react-router-dom";
import { IGenres } from "../../../interfaces/IGenres";
import getAllGenres from "../../utils/fetches/getAllGenres";
import GenreButton from "../../components/genreButton/GenreButton";

const Genres:React.FC = () => {

    const { genreID } = useParams();

    const [moviesByID, setMoviesByID] = useState<IMovieByID[] | null>(null);
    const [genre, setGenre] = useState<IGenres | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getAllGenres(setGenre);
    }, [])

    useEffect(() => {
        if(genreID) getMoviesByGenre(Number(genreID), setMoviesByID, currentPage, setTotalPages);
    }, [genreID, currentPage])

    const handlePageChange = (page: number) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (  
        <>
            <SearchBar/>

            <div className="scroll-container">
                <div className="genres__container">
                    {genre?.genres.map((genre) => (
                        <NavLink key={genre.id} to={`/home/genre/${genre.id}`}>
                            <GenreButton genreName={genre.name} />
                        </NavLink>
                    ))}
                </div>
            </div>

            <section className='movie-list'>
                <div className="movie-items-container">
                {
                    moviesByID?.map((movie) => (
                        <MovieItem key={movie.id} movie={movie} />
                    ))
                }
                </div>
                <div className="pagination">
                    <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                        Previous
                    </button>
                    <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                    </button>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Genres;