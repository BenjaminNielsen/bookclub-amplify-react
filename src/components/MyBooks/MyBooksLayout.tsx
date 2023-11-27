import {Heading, View} from "@aws-amplify/ui-react";
import {Link, Outlet} from "react-router-dom";
import React from "react";
import './Ratings/RatingsDesign.scss';

export default function MyBooksLayout(): React.ReactElement  {

    
    return (
        <View>
            <Heading className="myBooksHeader" level={2}>My Books</Heading>
            <button type="button" className="addBookButton" onClick={(e) => {
                e.preventDefault();window.location.href=
                'https://www.bens-book-club.com/my-books';}}>Add Book</button>
            <Outlet/>
        </View>
    )

}