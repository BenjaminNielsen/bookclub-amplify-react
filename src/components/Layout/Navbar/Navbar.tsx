import React, {useState} from "react";
import "./Navbar.scss";
import {Link, NavLink} from "react-router-dom";
import {SignOutButton} from "./SignoutButton/SignOutButton";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
                Book Club
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <NavLink to="/my-books">My Books</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <NavLink to="/suggestions">Suggestions</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <SignOutButton></SignOutButton>
                </li>
            </ul>
        </nav>
    );
};