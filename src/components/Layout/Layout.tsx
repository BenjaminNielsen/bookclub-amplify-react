import {NavLink, Outlet} from "react-router-dom";
import Hamburger from "./Navbar/Hamburger";
import "./Navbar/Hamburger.scss";
import {Button, View} from "@aws-amplify/ui-react";
import React from "react";
import {AuthUser} from "aws-amplify/src/auth";
/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */
interface LayoutProps {
    user: AuthUser | undefined
    signOut: any
}
export default function Layout({user, signOut}: LayoutProps) {
    return (
        <div>

            <NavLink to="/myBooks">My Books</NavLink>
            <NavLink to="/suggestions">Suggestions</NavLink>
            <NavLink to="/addBooks">Add Books</NavLink>
            <NavLink to="/events">Events</NavLink>
            <Button onClick={signOut}>Sign out</Button>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <View className="content">
                <Outlet />
            </View>
        </div>
    );
}