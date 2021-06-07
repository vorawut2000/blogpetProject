
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar  navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <a href="/blogs" className="navbar-brand" >Blogs</a>
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item">
                        <NavLink to={"/blogs"} className="nav-link">All Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/add"} className="nav-link">Add Blog</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;