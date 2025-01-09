import Footer from "../../components/footer/Footer";
import "./Detail.css";
import { IMovieByID } from '../../../interfaces/IMovieByID';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMoviesByID from "../../utils/fetches/getMoviesByID";
import getMovieTrailer from "../../utils/fetches/getMovieTrailer";

const convertRuntime = (minutes: number) => { 
    const hours = Math.floor(minutes / 60); 
    const remainingMinutes = minutes % 60; 
    return `${hours}h ${remainingMinutes}m`; 
}; 

const Detail: React.FC = () => {
    const { movieID } = useParams();
    const [movieByID, setMovieByID] = useState<IMovieByID | null>(null);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    useEffect(() => {
        if(movieID) getMoviesByID(setMovieByID, movieID);
    }, [movieID]);

    useEffect(() => {
        if(movieByID) getMovieTrailer(movieByID.id, setTrailerKey)
    }, [movieByID])

    const releaseYear = movieByID?.release_date ? new Date(movieByID.release_date).getFullYear() : "Unknown";

    return (  
        <>
            {movieByID ? (
                <section className="detail-section">

                    <div className="centre-info">
                            <img className="image-container"
                            src={
                                movieByID.poster_path
                                ? `https://image.tmdb.org/t/p/w200/${movieByID.backdrop_path}`
                                : "https://via.placeholder.com/200x300?text=No+Image"
                            }
                            alt={`${movieByID.title} poster`}
                            />
                            <div className="movie-info">
                                <p>Movie Details</p>
                                <h1>{movieByID.title}</h1>
                                <div className="movie-info__div">

                                    <div className="flex gap align">
                                        <img className="star" src="/images/RatingStar.png" alt="star" />
                                        <p>{(movieByID.vote_average).toFixed(1)}</p>
                                    </div>
                                    <p>•</p>
                                    <p>{releaseYear}</p>
                                    <p>•</p>
                                    <p>{movieByID.genres.length > 0 ? movieByID.genres.slice(0, 1).map((genre) => genre.name).join(', ') : "Unknown"}</p>
                                    <p>•</p>
                                    <p>{convertRuntime(movieByID.runtime)}</p>
                                </div>
                            </div>
                    </div>

                    <div className="box">
                        <h3>Overview</h3>
                        <p>{movieByID.overview}</p>
                        
                        <div className="flex space-between m-small">
                            <p className="font-weight">Genres</p>
                            <p>{movieByID.genres.map((genre) => genre.name).join(', ')}</p>
                        </div>
                    
                        <div className="flex space-between">
                            <p className="font-weight">Languages</p>
                            <p>{movieByID.spoken_languages.map((language) => language.name).join(', ')}</p>
                        </div>

                    </div>

                    <a href={`https://youtube.com/watch?v=${trailerKey ? trailerKey : ''}` }target="_blank">
                        <button className="button mb">Watch Trailer</button> 
                    </a>
                </section>
            ) : <p>Loading...</p>}
            <Footer />
        </>
    );
}

export default Detail;