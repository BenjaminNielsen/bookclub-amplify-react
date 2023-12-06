import React from "react";
import {Button, Divider, Heading, Image, View} from "@aws-amplify/ui-react";
import {Form, useLoaderData} from "react-router-dom";
import {SuggestionBooks} from "../../../../types/API";


export default function EditSuggestion(): React.ReactElement {
    const suggestionBooks: SuggestionBooks = useLoaderData() as SuggestionBooks;

    return (
        <View>
            <Image
                src={suggestionBooks.thumbnailUrl ?? ""}
                alt={"thumbnail for " + suggestionBooks.title}
            />
            <Form
                method="post"
            >
                <Divider padding="xs"/>
                <Heading className="bookTitle" padding="medium">{suggestionBooks.title}</Heading>

                <input type="hidden" name="id" value={suggestionBooks?.id ?? ""}/>
                <input type="hidden" name="isbn" value={suggestionBooks?.isbn ?? ""}/>
                <input type="hidden" name="title" value={suggestionBooks?.title ?? ""}/>
                <input type="hidden" name="thumbnailUrl" value={suggestionBooks?.thumbnailUrl ?? ""}/>
                <input name="author" value={suggestionBooks?.author?.map((author) => author ?? "")}/>
                <input name="genre" value={suggestionBooks?.genre?.map(genre => genre ?? "")}/>
                <input name="numberInSeries" value={suggestionBooks?.numberInSeries ?? ""}/>
                <input name="wordCount" value={suggestionBooks?.wordCount ?? ""}/>
                <input name="description" value={suggestionBooks?.description ?? ""}/>

                <Button type="submit" colorTheme="info" className="UpdateButton">Update</Button>
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
    )
}