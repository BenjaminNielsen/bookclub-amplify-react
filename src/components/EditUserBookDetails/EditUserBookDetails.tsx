import React from "react";
import {generateClient} from "aws-amplify/src/api";
import {deleteUserBooks, updateUserBooks} from "../../graphql/mutations";
import {UserBook} from "../../types/UserBooks";

import {Card} from "@aws-amplify/ui-react";


interface EditUserBookDetailsProps {
    userBook: UserBook
}

export default function EditUserBookDetails({userBook}: EditUserBookDetailsProps): React.ReactElement | null {

    const API = generateClient()

    async function onSubmit() {
        await API.graphql({
            query: updateUserBooks,
            variables: {
                input: {
                    "id": userBook.id,
                    "isbn": "Lorem ipsum dolor sit amet",
                    "title": "Lorem ipsum dolor sit amet",
                    "author": ['Ben'],
                    "genre": ['Genre'],
                    "numberInSeries": "Lorem ipsum dolor sit amet",
                    "wordCount": 1020,
                    "description": "Lorem ipsum dolor sit amet",
                    "rating": 1020,
                    "progress": 1020,
                    "dateStarted": "1970-01-01Z",
                    "dateFinished": "1970-01-01Z"
                }
            },
        });
    }

    async function deleteBook() {
        await API.graphql({
            query: deleteUserBooks,
            variables: {input: {id:userBook.id}},
        });
    }

    return (
        <Card>
            {userBook.title}
        </Card>
    )

}