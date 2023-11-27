import React, {useState} from "react";
import "./Navbar.scss";
import {Link, NavLink} from "react-router-dom";
import {AuthUser} from "aws-amplify/src/auth";
import {SignOutButton} from "./SignoutButton/SignOutButton";


interface NavbarProps {
    user: AuthUser | undefined
    signOut: any
}

export const Navbar = ({user, signOut}: NavbarProps) => {
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
                <li>
                    <NavLink to="/my-books">My Books</NavLink>
                </li>
                <li>
                    <NavLink to="/suggestions">Suggestions</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <SignOutButton signOut={signOut}></SignOutButton>
                </li>
            </ul>
        </nav>
    );
};