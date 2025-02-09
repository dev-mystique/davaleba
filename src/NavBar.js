import {Link} from "react-router-dom";
import "./style.css"
function Navbar(){
    return (
        <nav className="navbar">
            <Link className="nav" to='/'>Users</Link>
            <Link className="nav" to='/posts'>posts</Link>
        </nav>
    )
}
export default Navbar;