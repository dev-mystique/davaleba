import "./style.css";
import {useEffect, useState} from "react";
import Card from "./List";

function Posts() {
    const [posts, setPosts] = useState([]);

    return (
        <div className="card">
            <h1>Posts</h1>
        </div>
    );
}

export default Posts;