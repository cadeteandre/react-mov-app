import { IMovie } from '../../../interfaces/IMove';
import './MovieItem.css'

interface PropsItem {
    item: IMovie
}

const MovieItem: React.FC<PropsItem> = ({item}) => {
    return ( 
        <article>
            <div>
                <img src={item.poster_path} alt="" />
                <div>
                    <div>
                        <h3>{item.title}</h3>
                        <img src="/svg/Favourite.svg" alt="" />
                    </div>
                    <div>
                        <div>
                        <img src="/images/RatingStar.png" alt="" />
                        <p>rating</p>
                        </div>
                        <p>•</p>
                        <p>{`${item.release_date}`}</p>
                        <p>•</p>
                        <p>genre</p>
                        <p>•</p>
                        <p>length</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MovieItem;