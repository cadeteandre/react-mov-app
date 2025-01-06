import { useEffect } from "react";
import "./Loader.css"
import { useNavigate } from "react-router-dom";

const Loader: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/intro');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return ( 
        <section className="splash-loader">
            <div className="loader-container">
                <h1>.MOV</h1>
            </div>
        </section>
    );
}

export default Loader;