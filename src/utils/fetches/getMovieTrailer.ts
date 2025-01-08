import { IMovieTrailer } from '../../../interfaces/IMovieTrailer';
import { BASE_URL } from '../../App';
import { API_KEY } from './getAllGenres';

const getMovieTrailer = async (movieID: number, setFunc: React.Dispatch<React.SetStateAction<string | null>>) => {
    try {
        const response = await fetch(`${BASE_URL}movie/${movieID}/videos?api_key=${API_KEY}`);
        const data: IMovieTrailer = await response.json();
        const trailerKey: string | undefined = data.results.find((item) => item.type === 'Trailer')?.key;

        if(trailerKey) setFunc(trailerKey);
    } catch(error) {
        console.error(error);
    }
}

export default getMovieTrailer;