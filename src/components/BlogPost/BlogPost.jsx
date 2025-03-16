import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import formatDate from "../../helpers/formatDate/formatDate.jsx";

function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState("");


        async function fetchPost() {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data || null);
            } catch (err) {
                setError(`Er is iets misgegaan: ${err.message}. Probeer het later opnieuw.`);
                console.error(err);
            }
        }


    useEffect(() => {fetchPost();}, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!post) {
        return <p>Deze blogpost bestaat niet. Ga terug naar de <Link to="/overzichtspagina">overzichtspagina</Link>.</p>;
    }

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

