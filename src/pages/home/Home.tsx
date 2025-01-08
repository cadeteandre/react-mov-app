import { useEffect, useState } from "react";
import GenreButton from "../../components/genreButton/GenreButton";
import "./Home.css";
import getAllGenres from "../../utils/fetches/getAllGenres";
import { IGenres } from '../../../interfaces/IGenres';
import Footer from "../../components/footer/Footer";
import { ITrendingMovies } from '../../../interfaces/ITrendingMovies';
import getTrendingMovies from "../../utils/fetches/getTrendingMovies";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchBar from "../../components/searchBar/SearchBar";

const responsive = {
    superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

const Home = () => {

    const [genre, setGenre] = useState<IGenres | null>(null);
    const [trendingMovie, setTrendingMovie] = useState<ITrendingMovies | null>(null);

    useEffect(() => {
        getAllGenres(setGenre);
    }, [])

    useEffect(() => {
        getTrendingMovies(setTrendingMovie);
    }, [])

    return (  
        <>
            <h1>Welcome!</h1>
            <SearchBar />
            <div className="genres__container">
                {genre?.genres.map((genre) => (
                    <Link key={genre.id} to={`/home/genre/${genre.id}`}>
                        <GenreButton genreName={genre.name}/>
                    </Link>
                ))}
            </div>
            <section className="trending__movies">
                <div className="trending__header">
                    <h3>Trending Movies</h3>
                    <p>See all</p>
                    <div className="carousel__trending">
                        {trendingMovie?.results && trendingMovie.results.length > 0 ? (
                            <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            // showDots={true}
                            itemClass="carousel-item"
                            >
                            {trendingMovie.results.map((movie) => (
                                <Link key={movie.id} to={`/detail/${movie.id}`}>
                                    <img
                                        src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                                            : "https://via.placeholder.com/200x300?text=No+Image"
                                        }
                                        alt={`${movie.original_title} poster`}
                                    />
                                </Link>
                            ))}
                            </Carousel>
                        ) : (
                            <p>Loading movies...</p>
                        )}
                        </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;