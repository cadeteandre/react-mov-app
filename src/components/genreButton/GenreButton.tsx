// import { useState } from "react";
import "./GenreButton.css";

interface Props {
    genreName: string
}

const GenreButton: React.FC<Props> = ({ genreName }) => {
    // const [activeButton, setActiveButton] = useState(false);


    return (  
        <button className={`genre__button`}>{genreName}</button>
    );
}

export default GenreButton;