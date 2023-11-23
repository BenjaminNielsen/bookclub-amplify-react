import React from "react";
import {UserBook} from "../../../types/UserBooks";
import {Card} from "@aws-amplify/ui-react";

interface RatingsProps {
    userBook: UserBook
}
export default function Ratings({userBook}:RatingsProps): React.ReactElement | null {
    return <Card>
        {userBook.title} ratings
    </Card>

}