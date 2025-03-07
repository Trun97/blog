import './Overzichtspagina.css';
import { Link } from "react-router-dom";

function Overzichtspagina() {
    return (
        <div>
            <h1>Overzichtspagina</h1>
            <Link to="/posts/1">Klik hier voor post1</Link>
        </div>
    );
}

export default Overzichtspagina;
