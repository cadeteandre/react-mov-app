import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div>
                <NavLink to="/home">
                    <img src="/svg/Home.svg" alt="Home" />
                </NavLink>
                <NavLink to="/favourite">
                    <img src="/svg/Favourite.svg" alt="Favourite" />
                </NavLink>
                <NavLink to="/save">
                    <img src="/svg/Save.svg" alt="Save" />
                </NavLink>
                <NavLink to="/profile">
                    <img src="/svg/Profile.svg" alt="Profile" />
                </NavLink>
            </div>
        </footer>
    );
}

export default Footer;