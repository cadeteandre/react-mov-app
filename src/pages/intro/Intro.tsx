import "./Intro.css";

interface Props {
    setGoHome: React.Dispatch<React.SetStateAction<boolean>>
}

const Intro: React.FC<Props> = ({ setGoHome }) => {
    return (  
        <>
            <h1>Intro</h1>
            <button onClick={() => setGoHome(true)}>Get Start</button>
        </>
    );
}

export default Intro;