import Card from "./List";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import Posts from "./posts";
import Navbar from "./NavBar";
import FormConent from "./FormContent";
import {AuthProvider} from "./context/AuthContext";

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
                <AuthProvider>
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
                        <Route path="/form" element={<FormConent/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    )

}

export default App;
