import React from "react";

import {Button, Heading, View} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";

export default function SuggestionsLayout(): React.ReactElement {

    return (
        <View>
            <Heading level={2}>Current Book Suggestions</Heading>

                <Link to={"add"}>
                    <Button>
                        Add Book
                    </Button>
                </Link>

            <Outlet/>
        </View>
    )
}
