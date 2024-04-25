import {Link} from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <li><Link to="/">Tasks</Link></li>
            <li><Link to="/moreTasks">More Tasks</Link></li>
            <li><Link to="/evenMoreTasks">Even More Tasks</Link></li>
        </nav>
    );
}

export default NavBar;