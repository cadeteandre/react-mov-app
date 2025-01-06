import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/loader/Loader";

const RootLayout = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return ( 
        <>
        {""}
        {isLoading ? (<Loader />) : (
            <>
                <main className="outlet">
                    <Outlet />
                </main>
            </>
        )}
        </>
    );
}

export default RootLayout;