import {Heading, View} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";
import React from "react";
import './Ratings/RatingsDesign.scss';

export default function MyBooksLayout(): React.ReactElement  {

    
    return (
        <View>
            <Heading className="myBooksHeader" level={2}>My Books</Heading>
            <Link to={"add"}>
                <button type="button" className="addBookButton">Add Book</button>
            </Link>
            <Outlet/>
        </View>
    )

}