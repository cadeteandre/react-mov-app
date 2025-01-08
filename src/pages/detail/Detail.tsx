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

    return (  
        <>
            {movieByID ? (
                <section>
                    <h2>Movie Details</h2>
                    <h1>{movieByID.title}</h1>

                    <div>
                        <div>
                        <img
                        src={
                        movieByID.poster_path
                            ? `https://image.tmdb.org/t/p/w200/${movieByID.poster_path}`
                            : "https://via.placeholder.com/200x300?text=No+Image"
                        }
                        alt={`${movieByID.title} poster`}
                    />
                        <p>{(movieByID.vote_average).toFixed(1)}</p>
                        </div>
                        <p>•</p>
                        <p>{`${movieByID.release_date}`}</p>
                        <p>•</p>
                        <p>•</p>
                        <p>{convertRuntime(movieByID.runtime)}</p>
                    </div>

                    <h3>Overview</h3>

                    <p>{movieByID.overview}</p>
                    <p>See more ...</p>
                    <div>
                        <p>Genres</p>
                        <p>{movieByID.genres.map((genre) => genre.name).join(', ')}</p>
                        <p>Languages</p>
                        <p>{movieByID.spoken_languages.map((language) => language.name).join(', ')}</p>
                    </div>

                    <a href={`https://youtube.com/watch?v=${trailerKey ? trailerKey : ''}` }target="_blank">
                        <button>Watch Trailer</button> 
                    </a>
                </section>
            ) : <p>Loading...</p>}
            <Footer />
        </>
    );
}

export default Detail;