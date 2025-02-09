import Card from "./List";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Posts from "./posts";
import Navbar from "./NavBar";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    }, [])
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={
                        <>
                            {data.map((item, index) => (
                                <Card key={index} item={item}/>
                            ))}
                        </>}
                    />
                    <Route path="/posts" element={<Posts/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;
