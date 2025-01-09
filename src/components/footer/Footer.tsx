import { NavLink } from 'react-router-dom';
import './Footer.css'
import HomeSVG from '../svgFooter/HomeSVG';

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div>
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                    {({ isActive }) => <HomeSVG isActive={isActive} />}
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