import "./GenreButton.css";

interface Props {
    genreName: string
}

const GenreButton: React.FC<Props> = ({ genreName }) => {
    return (  
        <button className="genre__button">{genreName}</button>
    );
}

export default GenreButton;