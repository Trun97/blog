import { Link, useParams } from "react-router-dom";
import posts from "../../constants/data.json";
import formatDate from "../../helpers/formatDate/formatDate.jsx";

function BlogPost() {
    const { id } = useParams();
    const post = posts.find(post => post.id === id);


    return (
        <div>
            <h1>{post.title} ({post.readTime})</h1>
            <h2>{post.subtitle}</h2>
            <p>Geschreven door {post.author} op {formatDate(post.created)}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            <p>Terug naar de <Link to="/overzichtspagina">overzichtspagina</Link></p>
        </div>
    );
}

export default BlogPost;
