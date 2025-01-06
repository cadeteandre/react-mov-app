import { Link } from "react-router-dom";
import "./Intro.css";
import image1 from '/images/Image.png';

const Intro: React.FC = () => {
    return (  
        <section className="intro-section">
        <div className="img-area">
            <img src={image1} alt="image 1" />
        </div>
            <h1>Enjoy Your Movie Watch Everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            <Link to={'/home'}>
                <button>Get Started</button>
            </Link>
        </section>
    );
}

export default Intro;