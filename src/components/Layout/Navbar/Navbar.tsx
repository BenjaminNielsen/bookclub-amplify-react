import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import {Button} from "@aws-amplify/ui-react";
import {AuthUser} from "aws-amplify/src/auth";


interface NavbarProps {
    user: AuthUser | undefined
    signOut: any
}
export const Navbar = ({user, signOut}:NavbarProps) => {
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
                    <NavLink to="/myBooks">My Books</NavLink>
                </li>
                <li>
                    <NavLink to="/suggestions">Suggestions</NavLink>
                </li>
                <li>
                    <NavLink to="/addBooks">Add Books</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <Button onClick={signOut}>Sign out</Button>
                </li>
            </ul>
        </nav>
    );
};