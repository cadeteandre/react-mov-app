import { ITrendingMovie, ITrendingMovies } from "../../../interfaces/ITrendingMovies";
import { BASE_URL } from "../../App";
import { API_KEY } from "./getAllGenres";

const fetchMovies = async (searchQuery: string, setFunc: React.Dispatch<React.SetStateAction<ITrendingMovie[]>>) => {
    try {
        const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        const data: ITrendingMovies = await response.json();
        setFunc(data.results);
    } catch(error) {
        console.error(error);
    }
};

export default fetchMovies;