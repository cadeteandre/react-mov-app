import Footer from "../../components/footer/Footer";
import "./Detail.css";
import { IMovieByID } from '../../../interfaces/IMovieByID';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovieByID | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d60088fc94f6b02cbf6a89864cdef024`)
    //             if (!response.ok) {
    //                 throw new Error('Error')
    //             }
    //             const data: IMovieByID = await response.json();
    //             console.log(data);
                
    //             setMovie(data);
    //         } catch (error) {
    //             console.error('Error fetching movie data', error);
    //         }
    //     };
    //     fetchData();
    // }, [id]);

    useEffect(() => {
        const loadDetail = async () => {
            if (id) {
                try {
                const data = await fetchDetail(id);
                setMovie(data.movie ? data.movie[0] : null);
                } catch (error) {
                console.error("Error fetching movie details:", error);
                }
            }
        };

        loadDetail();
    }, [id]);

    return (  
        <>
            <h2>Movie Details</h2>
            {/* <h1>title</h1> */}

            <div>
                {/* wie Movie Item */}
                        <div>
                        <img src="/images/RatingStar.png" alt="" />
                        <p>rating</p>
                        </div>
                        <p>•</p>
                        {/* <p>{`${item.release_date}`}</p> */}
                        <p>•</p>
                        <p>genre</p>
                        <p>•</p>
                        <p>length</p>
                    </div>

            <h3>Overview</h3>

            {/* <p>description</p> */}
            <p>See more ...</p>
            <div>
                <p>Genres</p>
                {/* <p>Angaben Genres</p> */}
                <p>Languages</p>
                {/* <p>Angaben Languages</p> */}
            </div>

                <a href="https://youtube.com" target="_blank">
                    <button>Watch Trailer</button> 
                </a>
                <Footer />
        </>
    );
}

export default Detail;