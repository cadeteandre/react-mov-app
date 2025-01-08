import { BASE_URL } from "../../App";
import { API_KEY } from "./getAllGenres";
import { IMovieByGenre } from '../../../interfaces/IMovieByGenre';
import { IMovieByID } from "../../../interfaces/IMovieByID";

const getMoviesByGenre = async (
    genreId: number,
    setMoviesByID: React.Dispatch<React.SetStateAction<IMovieByID[] | null>>,
    page: number,
    setTotalPages?: React.Dispatch<React.SetStateAction<number>>
) => {
    try {
        const response = await fetch(
            `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`
        );
        const data: IMovieByGenre = await response.json();

        if (setTotalPages) {
            setTotalPages(data.total_pages);
        }

        const detailedMovies = await Promise.all(
            data.results.map(async (movie) => {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
                );
                return response.json();
            })
        );

        setMoviesByID(detailedMovies);
    } catch (error) {
        console.error("Error fetching movies by genre:", error);
        setMoviesByID(null);
    }
};

export default getMoviesByGenre;