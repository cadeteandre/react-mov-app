import { useEffect, useState } from "react";
import GenreButton from "../../components/genreButton/GenreButton";
import "./Home.css";
import getAllGenres from "../../utils/fetches/getAllGenres";
import { IGenres } from '../../../interfaces/IGenres';
import Footer from "../../components/footer/Footer";

const Home = () => {

    const [genre, setGenre] = useState<IGenres | null>(null)
    useEffect(() => {
        getAllGenres(setGenre);
    }, [])
    return (  
        <>
            <h1>Welcome!</h1>
            <input type="text" placeholder="Search Movie ..." />
            <div className="genres__container">
                {genre?.genres.map((genre) => (
                    <GenreButton key={genre.id} genreName={genre.name}/>
                ))}
            </div>
            <section className="trending__movies">
                <div className="trending__header">
                    <h3>Trending Movies</h3>
                    <p>See all</p>
                    <div className="carousel__trending">
                        <p>Movie</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;