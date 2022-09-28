import { Link } from "react-router-dom";

function Header()
{
return(
    <div>
 <Link to="/about">About 2</Link> &nbsp;
    <a href="/about">About</a> &nbsp;
    <a href="/admin">Admin</a>
    </div>

);

}

export default Header;