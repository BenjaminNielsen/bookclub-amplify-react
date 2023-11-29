import {Outlet} from "react-router-dom";
import {View} from "@aws-amplify/ui-react";
import React from "react";
import {Navbar} from "./Navbar/Navbar";

// A "layout route" is a good place to put markup you want to share across all the pages on your site, like navigation.
export default function Layout() {
    return (
        <div>
            <Navbar></Navbar>
            {/* An <Outlet> renders whatever child route is currently active*/}
            <View>
                <Outlet/>
            </View>
        </div>
    );
}