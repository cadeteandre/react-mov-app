import { ITrendingMovies } from "../../../interfaces/ITrendingMovies";
import { BASE_URL } from "../../App";

export const API_KEY = import.meta.env.VITE_API_KEY;

const getTrendingMovies = async (setFunction: React.Dispatch<React.SetStateAction<ITrendingMovies | null>>) => {
    const response = await fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    setFunction(data);
}

export default getTrendingMovies;