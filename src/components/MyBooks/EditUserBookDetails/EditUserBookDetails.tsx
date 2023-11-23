import React, {useState} from "react";
import {generateClient} from "aws-amplify/api";
import {deleteUserBooks, updateUserBooks} from "../../../graphql/mutations";
import {UserBook} from "../../../types/UserBooks";

import {Button, Card, Divider, Heading, View, Image, ButtonGroup, TextField} from "@aws-amplify/ui-react";


interface EditUserBookDetailsProps {
    userBook: UserBook
    onDeleteParent: any
    onUpdateParent: any
}

export default function EditUserBookDetails({userBook, onDeleteParent, onUpdateParent}: EditUserBookDetailsProps): React.ReactElement | null {

    const API = generateClient()

    const [dateStarted, setDateStarted] = useState(userBook.dateStarted)
    const [dateFinished, setDateFinished] = useState(userBook.dateFinished)

    function onDateStartedChanged(e: React.ChangeEvent<HTMLInputElement>):void {
        const newDate:string = e.target.value
        setDateStarted(newDate)
    }

    function onDateFinishedChanged(e: React.ChangeEvent<HTMLInputElement>):void {
        const newDate:string = e.target.value
        setDateFinished(newDate)
    }

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
                    "isbn": userBook.isbn,
                    "title": userBook.title,
                    "author": ['Ben'],
                    "genre": ['Genre'],
                    "numberInSeries": userBook.numberInSeries,
                    "wordCount": userBook.wordCount,
                    "description": userBook.description,
                    "progress": 1020,
                    "dateStarted": dateStarted,
                    "dateFinished": dateFinished
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

                <TextField name="dateStarted" label={"Date Started"} type="date" value={dateStarted??""} onChange={onDateStartedChanged}/>
                <TextField name="dateFinished"  label={"Date Finished"} type="date" value={dateFinished??""} onChange={onDateFinishedChanged}/>
                <ButtonGroup justifyContent="center" variation="primary">
                    <Button onClick={onDeleteClick} colorTheme="error"> Delete </Button>
                    <Button onClick={onUpdateClick}> Update </Button>
                </ButtonGroup>
            </View>
        </Card>
    )

}