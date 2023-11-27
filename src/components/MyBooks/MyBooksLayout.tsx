import {Heading, View} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function MyBooksLayout(): React.ReactElement  {

    return (
        <View>
            <Heading level={2}>My Books</Heading>
            <Link to={"add"}>Add Book</Link>

            <Outlet/>
        </View>
    )

}