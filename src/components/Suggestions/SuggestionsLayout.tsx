import React from "react";

import { Heading, View} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";

export default function SuggestionsLayout(): React.ReactElement {

    return (
        <View>
            <Heading level={2}>Current Book Suggestions</Heading>

            <Link to={"add"}>Add Book</Link>
            <Outlet/>
        </View>
    )
}
