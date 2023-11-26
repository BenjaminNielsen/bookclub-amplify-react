import React, {useState} from "react";
import {generateClient} from "aws-amplify/api";
import {deleteUserBooks, updateUserBooks} from "../../../graphql/mutations";

import {Button, ButtonGroup, Card, Divider, Flex, Heading, Image, TextField, View} from "@aws-amplify/ui-react";
import {UserBooks} from "../../../types/API";
import {Link, redirect, useLoaderData, useNavigate} from "react-router-dom";



export default function EditUserBookDetails(): React.ReactElement | null {

    const userBook:UserBooks  = useLoaderData() as UserBooks;
    const [dateStarted, setDateStarted] = useState(userBook.dateStarted)
    const [dateFinished, setDateFinished] = useState(userBook.dateFinished)

    function onDateStartedChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        const newDate: string = e.target.value
        setDateStarted(newDate)
    }

    function onDateFinishedChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        const newDate: string = e.target.value
        setDateFinished(newDate)
    }

    // function onRatingsClick(): void {
    //     const navigate = useNavigate();
    //     navigate(`ratings/${userBook.id}`, {relative: "path"})
    // }

    // async function onUpdateClick() {
    //     if (!userBook.id) {
    //         console.error("tried to edit details on book with no id")
    //         return
    //     }
    //     await API.graphql({
    //         query: updateUserBooks,
    //         variables: {
    //             input: {
    //                 "id": userBook.id,
    //                 "isbn": userBook.isbn,
    //                 "title": userBook.title,
    //                 "author": ['Ben'],
    //                 "genre": ['Genre'],
    //                 "numberInSeries": userBook.numberInSeries,
    //                 "wordCount": userBook.wordCount,
    //                 "description": userBook.description,
    //                 "progress": 1020,
    //                 "dateStarted": dateStarted,
    //                 "dateFinished": dateFinished
    //             }
    //         },
    //     });
    //     onUpdateParent()
    // }

    // async function onDeleteClick() {
    //     if (!userBook.id) {
    //         console.error("tried to delete book with no id")
    //         return
    //     }
    //     await API.graphql({
    //         query: deleteUserBooks,
    //         variables: {input: {"id": userBook.id,}},
    //     });
    //     onDeleteParent();
    // }

    return (
        <Flex justifyContent="center">
            <Card
                borderRadius="medium"
                variation="outlined"
            >
                <Image
                    src={userBook.thumbnailUrl ?? ""}
                    alt={"thumbnail for " + userBook.title}
                />
                <View padding="xs">
                    <Divider padding="xs"/>
                    <Heading padding="medium">{userBook.title}</Heading>

                    <TextField name="dateStarted"
                               label={"Date Started"}
                               type="date"
                               value={dateStarted ?? ""}
                               onChange={onDateStartedChanged}/>
                    <TextField name="dateFinished"
                               label={"Date Finished"}
                               type="date"
                               value={dateFinished ?? ""}
                               onChange={onDateFinishedChanged}/>
                    {dateFinished && <Link to={`../rating/${userBook.id}`}>Ratings</Link>}
                    <ButtonGroup justifyContent="center" variation="primary">
                        <Button colorTheme="error"> Delete </Button>
                        <Button> Update </Button>
                    </ButtonGroup>
                </View>
            </Card>
        </Flex>
    )

}