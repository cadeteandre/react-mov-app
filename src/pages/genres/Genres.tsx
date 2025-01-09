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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getAllGenres(setGenre);
    }, [])

    useEffect(() => {
        if(genreID) getMoviesByGenre(Number(genreID), setMoviesByID, currentPage, setTotalPages);
    }, [genreID, currentPage])

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (  
        <>
            <SearchBar/>
            <div className="genres__container">
                {genre?.genres.map((genre) => (
                    <Link onClick={() => setCurrentPage(1)} key={genre.id} to={`/home/genre/${genre.id}`}>
                        <GenreButton genreName={genre.name}/>
                    </Link>
                ))}
            </div>
            <section className='movie-list'>
                {
                    moviesByID?.map((movie) => (
                        <Link key={movie.id} to={`/detail/${movie.id}`}>
                            <MovieItem movie={movie} />
                        </Link>
                    ))
                }
            </section>
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
            </div>
            <Footer/>
        </>
    );
}

export default Genres;