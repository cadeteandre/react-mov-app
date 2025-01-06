import "./Intro.css";
import image1 from '/images/Image.png';

interface Props {
    setGoHome: React.Dispatch<React.SetStateAction<boolean>>
}

const Intro: React.FC<Props> = ({ setGoHome }) => {
    return (  
        <section className="intro-section">
        <div className="img-area">
            <img src={image1} alt="image 1" />
        </div>
            <h1>Enjoy Your Movie Watch Everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            <button onClick={() => setGoHome(true)}>Get Started</button>
        </section>
    );
}

export default Intro;