import React, {useState} from "react";
import "./Navbar.scss";
import { NavLink} from "react-router-dom";
import {SignOutButton} from "./SignoutButton/SignOutButton";
import { HamburgetMenuClose, HamburgetMenuOpen} from "./Icons/Icons";
import {View} from "@aws-amplify/ui-react";

export const Navbar = () => {
    const [menuClicked, setClick] = useState(false);

    const handleClick = (clicked:boolean) => setClick(clicked);


    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <span>Book Club</span>
                </NavLink>

                <ul className={menuClicked ? "nav-menu active" : "nav-menu"}>

                    <li className="nav-item">
                        <NavLink
                            to="/my-books"
                            className={({isActive}) => { return `nav-links ${isActive && 'active'}`}}
                            onClick={()=>handleClick(false)}
                        >
                            My Books
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/suggestions"
                            className={({isActive}) => { return `nav-links ${isActive && 'active'}`}}
                            onClick={()=>handleClick(false)}
                        >
                            Suggestions
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/events"
                            className={({isActive}) => { return `nav-links ${isActive && 'active'}`}}
                            onClick={()=>handleClick(false)}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <View className={"nav-links"}>
                            <SignOutButton />
                        </View>
                    </li>
                </ul>
                <div className="nav-icon" onClick={()=>handleClick(!menuClicked)}>

                    {menuClicked ? (
                        <span className="icon">
                <HamburgetMenuOpen/>{" "}
              </span>
                    ) : (
                        <span className="icon">
                <HamburgetMenuClose/>
              </span>
                    )}
                </div>
            </div>
        </nav>
    );
};