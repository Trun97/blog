import { useParams } from "react-router-dom";

function BlogPost() {
    const { id } = useParams();

    return (
        <div>
            <h1>Blogpost: {id}</h1>
        </div>
    )
}

export default BlogPost;