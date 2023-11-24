import { Outlet} from "react-router-dom";
import { View} from "@aws-amplify/ui-react";
import React from "react";
import {AuthUser} from "aws-amplify/src/auth";
import {Navbar} from "./Navbar/Navbar";
/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */
interface LayoutProps {
    user: AuthUser | undefined
    signOut: any
}
export default function Layout({user, signOut}: LayoutProps) {
    return (
        <div>

            <Navbar user={user} signOut={signOut}></Navbar>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <View className="content">
                <Outlet />
            </View>
        </div>
    );
}