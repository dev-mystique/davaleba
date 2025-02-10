import {useAuth} from "./context/AuthContext";
import { useEffect, useState} from "react";

function Dash() {
    const {auth} = useAuth();
    const [user, setUser] = useState("");
    useEffect(() => {
        setUser(auth);
        console.log(user)
    }, [auth, user])

    return (
        <>
            <h1 className="dash">{user.auth && "Loged in success"}</h1>
            {user.auth && (
                <>
                    <h2>Username:
                        <span>{user.user.username}</span>
                    </h2>
                    <p>User Id: {user.user.id}</p>

                </>
            )}

        </>
    );
}

export default Dash