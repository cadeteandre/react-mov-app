import { useState } from "react";
import { Outlet } from "react-router-dom";
import Intro from "../pages/intro/Intro";

const RootLayout = () => {

    const [goHome, setGoHome] = useState<boolean>(false);

    return ( 
        <>
            {!goHome ? <Intro setGoHome={setGoHome} /> : <Outlet />}
        </>
    );
}

export default RootLayout;