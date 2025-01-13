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
            items: 3,
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
            <h1 className="home-heading">Welcome!</h1>
            <SearchBar />
            <div className="scroll-container">
                <div className="genres__container">
                    {genre?.genres.map((genre) => (
                        <Link key={genre.id} to={`/home/genre/${genre.id}`}>
                            <GenreButton genreName={genre.name} />
                        </Link>
                    ))}
                </div>
            </div>

            <section className="trending__movies">
                <div className="trending__header">
                    <h3><b>Trending Movies</b></h3>
                    <div className="carousel__trending">
                        {trendingMovie?.results && trendingMovie.results.length > 0 ? (
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                showDots={true}
                                containerClass="carousel-container"
                                dotListClass="custom-dot-list"
                                itemClass="carousel-item"
                                arrows={false}
                            >
                            {trendingMovie.results.map((movie) => (
                                <Link key={movie.id} to={`/detail/${movie.id}`}>
                                    <div className="movie-card">
                                        <img
                                            src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
                                                : "https://via.placeholder.com/200x300?text=No+Image"
                                            }
                                            alt={`${movie.original_title} poster`}
                                        />
                                        <div className="movie-info">
                                            <h3 className="movie-title">{movie.original_title}</h3>
                                            <div className="movie-rating">
                                                <img className="star-icon" src="/images/RatingStar.png" alt="star" />
                                                <span>{movie.vote_average.toFixed(1)} / 100</span>
                                            </div>
                                        </div>
                                    </div>
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