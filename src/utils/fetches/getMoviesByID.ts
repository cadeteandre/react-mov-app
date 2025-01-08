import { IMovieByID } from "../../../interfaces/IMovieByID";
import { BASE_URL } from "../../App";
import { API_KEY } from "./getAllGenres";

const getMoviesByID = async (setFunc: React.Dispatch<React.SetStateAction<IMovieByID | null>>, movieID: string) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieID}?api_key=${API_KEY}`);
        const data: IMovieByID = await response.json();        
        setFunc(data);
    } catch (error) {
        console.error('Error fetching movie data', error);
    }
};

export default getMoviesByID;