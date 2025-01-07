import { BASE_URL } from "../../App";
import { API_KEY } from "./getAllGenres";
import { IMovieByGenre } from '../../../interfaces/IMovieByGenre';
import { IMovieByID } from "../../../interfaces/IMovieByID";

const getMoviesByGenre = async (
    genreId: number,
    setFunc: React.Dispatch<React.SetStateAction<IMovieByID[] | null>>
) => {
    try {
        const response = await fetch(
        `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`
        );
        const data: IMovieByGenre = await response.json();
        const detailedMovies = await Promise.all(
            data.results.map(async (movie) => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
            );
            return response.json();
            })
        );

        setFunc(detailedMovies);
    } catch (error) {
        console.error("Error fetching movies by genre:", error);
        setFunc(null);
    }
};

export default getMoviesByGenre