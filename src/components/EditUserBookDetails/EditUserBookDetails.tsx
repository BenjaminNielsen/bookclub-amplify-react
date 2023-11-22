import React from "react";
import {generateClient} from "aws-amplify/api";
import {deleteUserBooks, updateUserBooks} from "../../graphql/mutations";
import {UserBook} from "../../types/UserBooks";

import {Button, Card, Divider, Heading, View, Image, ButtonGroup} from "@aws-amplify/ui-react";


interface EditUserBookDetailsProps {
    userBook: UserBook
    onDeleteParent: any
    onUpdateParent: any
}

export default function EditUserBookDetails({userBook, onDeleteParent, onUpdateParent}: EditUserBookDetailsProps): React.ReactElement | null {

    const API = generateClient()

    async function onUpdateClick() {
        if(!userBook.id){
            console.error("tried to edit details on book with no id")
            return
        }
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
                    "progress": 1020,
                    "dateStarted": "1970-01-01Z",
                    "dateFinished": "1970-01-01Z"
                }
            },
        });
        onUpdateParent()
    }
    async function onDeleteClick() {
        if(!userBook.id){
            console.error("tried to delete book with no id")
            return
        }
        await API.graphql({
            query: deleteUserBooks,
            variables: {input: {"id": userBook.id,}},
        });
        onDeleteParent();
    }


    return (
        <Card
            borderRadius="medium"
            maxWidth="20rem"
            variation="outlined"
        >
            <Image
                src={userBook.thumbnailUrl??""}
                alt={"thumbnail for " + userBook.title}
            />
            <View padding="xs">
                <Divider padding="xs" />
                <Heading padding="medium">{userBook.title}</Heading>
                <ButtonGroup justifyContent="center" variation="primary">
                    <Button onClick={onDeleteClick} colorTheme="error"> Delete </Button>
                    <Button onClick={onUpdateClick}> Update </Button>
                </ButtonGroup>
            </View>
        </Card>
    )

}