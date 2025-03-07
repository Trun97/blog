import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/overzichtspagina">Alle posts</Link></li>
                <li><Link to="/newpost">Nieuwe Post maken</Link></li>
            </ul>
        </nav>
    )
}

export default Nav