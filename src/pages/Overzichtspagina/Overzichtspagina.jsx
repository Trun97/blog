import './Overzichtspagina.css';
import { Link } from "react-router-dom";
// import posts from "../../constants/data.json";
import axios from "axios";
import {useEffect, useState} from "react";


function Overzichtspagina() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("")

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            console.log(response.data);
            setBlogs(response.data);
        } catch (err) {
            setError(`Er is iets misgegaan: ${err.message}. Probeer het later opnieuw`);
            console.error(`Er is iets misgegaan: ${err.message}`);

        }
    }

    useEffect(() => {
        void fetchData()
    },[]);


    return (
        <div>
            <h1>Overzichtspagina</h1>
            <h2>Bekijk alle {blogs.length} posts op het platform</h2>
            <ul>
                {error ? (<p>{error}</p>) : blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/posts/${blog.id}`}>
                            <p>{blog.title} ({blog.author})</p>
                        </Link>
                        <p>{blog.comments} reacties - {blog.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Overzichtspagina;

