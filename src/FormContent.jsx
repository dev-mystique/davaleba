import "./style.css";
import {useEffect, useRef} from "react";
import {useAuth} from "./context/AuthContext";
import Dash from "./dashboard";
import checkLogin from "./Login.js";

function FormConent() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const {auth, setAuth} = useAuth();

    const changeName = () => {
        nameRef.current.focus()
    }
    const changeEmail = () => {
        emailRef.current.focus()
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    const styleChange = () => {
        nameRef.current.style.backgroundColor = getRandomColor();
        emailRef.current.style.backgroundColor = getRandomColor();
    }

    const clearInputs = () => {
        const user = checkLogin(nameRef.current.value, emailRef.current.value)
        setAuth(user)
    }
    useEffect(() => {
        console.log(auth)
    })

    return (
        <div className="form">
            <form className={"form-iner"}>

                <label>Name:</label>
                <input ref={nameRef} type='text'/>

                <label>Password:</label>
                <input ref={emailRef} type="text"/>

            </form>
            <div className="form-iner-btns">
                <button onClick={changeName}>Name</button>
                <button onClick={changeEmail}>Email</button>
                <button onClick={styleChange}>make Changes</button>
                <button onClick={clearInputs}>set auth</button>
            </div>
            <Dash/>
        </div>
    );
}

export default FormConent;
