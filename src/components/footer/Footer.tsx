import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div>
                <NavLink to="/">
                    <img src="../../../public/svg/Home.svg" alt="Home" />
                </NavLink>
                <NavLink to="/favourite">
                    <img src="../../../public/svg/Favourite.svg" alt="Favourite" />
                </NavLink>
                <NavLink to="/save">
                    <img src="../../../public/svg/Save.svg" alt="Save" />
                </NavLink>
                <NavLink to="/profile">
                    <img src="../../../public/svg/Profile.svg" alt="Profile" />
                </NavLink>
            </div>
        </footer>
    );
}

export default Footer;