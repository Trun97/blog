import './Overzichtspagina.css';
import { Link } from "react-router-dom";
import posts from "../../constants/data.json";

function Overzichtspagina() {
    return (
        <div>
            <h1>Overzichtspagina</h1>
            <h2>Bekijk alle {posts.length} posts op het platform</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <p>{post.title} ({post.author})</p>
                        </Link>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Overzichtspagina;

