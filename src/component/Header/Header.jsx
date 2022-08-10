import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <>
            <nav className="indigo amber darken-3 container">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo center">React Food</a>
                    <ul className="left">
                        <li><NavLink to='/' className='link'>European</NavLink></li>
                        <li><NavLink to='/Chinese' className='link'>Chinese</NavLink></li>
                        <li><NavLink to='/Mexican' className='link'>Mexican</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header