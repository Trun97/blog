import './NewPost.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function NewPost() {
    const [formTitle, setFormTitle] = useState("");
    const [formSubtitle, setFormSubtitle] = useState("");
    const [formNames, setFormNames] = useState("");
    const [formBlogpost, setFormBlogpost] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();

        if (!formTitle.trim() || !formSubtitle.trim() || !formNames.trim()) {
            setError("Alle velden moeten worden ingevuld");
        }
        if (formBlogpost.length < 300 || formBlogpost > 2000) {
            setError("De blogpost moet minimaal 300 en maximaal 2000 karaktes bevatten")
        }

        const postInformation = {
            title: formTitle,
            subtitle: formSubtitle,
            content: formBlogpost,
            created: new Date().toISOString(),
            author: formNames,
            readTime: 5,
            comments: 0,
            shares: 0
        }
        navigate("/overzichtspagina");
        console.log(postInformation);

    }



    return (
        <>
            <h1>Post toevoegen</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title
                    <input type="text" id="title" name="title" value={formTitle} onChange={(e) => setFormTitle(e.target.value)}/>
                </label>
                <label htmlFor="subtitle">Subtitle
                    <input type="text" id="subtitle" name="subtitle" value={formSubtitle} onChange={(e) => setFormSubtitle(e.target.value)}/>
                </label>
                <label htmlFor="names">Naam en achternaam
                    <input type="text" id="names" name="names" value={formNames} onChange={(e) => setFormNames(e.target.value)}/>
                </label>
                <label htmlFor="blogpost">Blogpost
                    <textarea id="blogpost" name="blogpost" value={formBlogpost} onChange={(e) => setFormBlogpost(e.target.value)}/>
                </label>
                <button type="submit">Toevoegen</button>
            </form>
            </>
    )
}

export default NewPost