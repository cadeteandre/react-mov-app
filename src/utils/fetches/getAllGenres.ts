import { IGenres } from "../../../interfaces/IGenres";
import { BASE_URL } from "../../App";

export const API_KEY = import.meta.env.VITE_API_KEY;

const getAllGenres = async (setFunction: React.Dispatch<React.SetStateAction<IGenres | null>>) => {
    const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    setFunction(data);
}

export default getAllGenres