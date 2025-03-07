import './Nav.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive}) => isActive === true ? 'active-link' :'default-link'}>Home</NavLink></li>
                <li><NavLink to="/overzichtspagina" className={({ isActive}) => isActive === true ? 'active-link' :'default-link'}>Alle posts</NavLink></li>
                <li><NavLink to="/newpost" className={({ isActive}) => isActive === true ? 'active-link' :'default-link'}>Nieuwe Post maken</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav


