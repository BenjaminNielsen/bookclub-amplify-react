import {Heading, View, Button} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";
import React from "react";
import './Ratings/RatingsDesign.scss';

export default function MyBooksLayout(): React.ReactElement  {

    
    return (
        <View>
            <Heading className="myBooksHeader" level={2}>My Books</Heading>
            <Link to={"add"}>
                <Button type="button" variation="primary" className="addBookButton">Add Book</Button>
            </Link>
            <Outlet/>
        </View>
    )

}