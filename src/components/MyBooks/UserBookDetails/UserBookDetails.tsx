import React, {useState} from "react";

import "../Ratings/RatingsDesign.scss";
import {
    Button,
    Card,
    Divider,
    Heading,
    Image,
    SliderField,
    TextField,
    View
} from "@aws-amplify/ui-react";
import {UserBooks} from "../../../types/API";
import {Form, Link, useLoaderData} from "react-router-dom";


export default function UserBookDetails(): React.ReactElement | null {

    const userBook: UserBooks = useLoaderData() as UserBooks;
    const [dateStarted, setDateStarted] = useState(userBook.dateStarted)
    const [dateFinished, setDateFinished] = useState(userBook.dateFinished)
    const [percentComplete, setPercentComplete] = useState(userBook.progress ?? 0)

    function onDateStartedChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        const newDate: string = e.target.value
        setDateStarted(newDate)
    }

    function onDateFinishedChanged(e: React.ChangeEvent<HTMLInputElement>): void {
        const newDate: string = e.target.value
        setDateFinished(newDate)
    }

    return (
            <Card
                borderRadius="medium"
                variation="outlined"
            >
                <Image
                    src={userBook.thumbnailUrl ?? ""}
                    alt={"thumbnail for " + userBook.title}
                />
                <View padding="xs">
                    <Form
                        method="post"
                    >
                        <Divider padding="xs"/>
                        <Heading className="bookTitle" padding="medium">{userBook.title}</Heading>
                        <input type="hidden" name="id" value={userBook?.id ?? ""}/>
                        <input type="hidden" name="isbn" value={userBook?.isbn ?? ""}/>
                        <input type="hidden" name="title" value={userBook?.title ?? ""}/>
                        <input type="hidden" name="thumbnailUrl" value={userBook?.thumbnailUrl ?? ""}/>
                        <input type="hidden" name="author" value={userBook?.author?.map((author) => author ?? "")}/>
                        <input type="hidden" name="genre" value={userBook?.genre?.map(genre => genre ?? "")}/>
                        <input type="hidden" name="numberInSeries" value={userBook?.numberInSeries ?? ""}/>
                        <input type="hidden" name="wordCount" value={userBook?.wordCount ?? ""}/>
                        <input type="hidden" name="description" value={userBook?.description ?? ""}/>

                        <SliderField name="progress" label="Percent Complete" value={percentComplete}
                                     onChange={setPercentComplete} min={0} max={100} step={1}/>

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
                        <div>
                            {dateFinished && <Link to={`rating/${userBook.id}`}>
                                <Button type="button" variation="primary" className="ratingsButton">Ratings</Button>
                            </Link>}
                        </div>
                        <Button type="submit" colorTheme="info">Update</Button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !window.confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <Button className="deleteButton" type="submit" colorTheme="error">Delete</Button>
                    </Form>
                </View>
            </Card>
    )

}