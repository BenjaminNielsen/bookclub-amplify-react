import {Heading, View} from "@aws-amplify/ui-react";
import {Outlet} from "react-router-dom";
import React from "react";

export default function MyBooksLayout(): React.ReactElement  {

    return (
        <View>
            <Heading level={2}>My Books</Heading>
            <Outlet/>
        </View>
    )

}