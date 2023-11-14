import {Button, Card} from "@aws-amplify/ui-react";
import React from "react";
import UserBooksCreateForm from "../../ui-components/UserBooksCreateForm";
import { API } from "aws-amplify";
import {createUserBooks} from "../../graphql/mutations";

export default function MyBooks():React.ReactElement | null {
    async function onClick(){
        const newUserBooks = await API.graphql({
            query: createUserBooks,
            variables: {
                input: {
                    "isbn": "Lorem ipsum dolor sit amet",
                    "title": "Lorem ipsum dolor sit amet",
                    "author": [],
                    "genre": [],
                    "numberInSeries": "Lorem ipsum dolor sit amet",
                    "wordCount": 1020,
                    "description": "Lorem ipsum dolor sit amet",
                    "rating": 1020,
                    "progress": 1020,
                    "dateStarted": "1970-01-01Z",
                    "dateFinished": "1970-01-01Z"
                }
            }
        });
    }

    return (<Card>
        <UserBooksCreateForm></UserBooksCreateForm>
        <Button onClick={onClick}>Add User Book</Button>
    </Card>)
}