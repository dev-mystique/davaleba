import "./style.css";
import {useState, useEffect} from "react";

function Posts() {
    const [posts, setPosts] = useState(0);

    const handleClick = () => {
        setPosts(p => {
            console.log("Before update:", p);
            return p + 1;
        });
    };

    useEffect(() => {
        console.log("Updated state:", posts);
    }, [posts]);

    return (
        <div className="card">
            <button onClick={handleClick}>{posts} Add Posts</button>
            <h1>Posts</h1>
        </div>
    );
}

export default Posts;
