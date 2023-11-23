import React, {useState} from "react";
import {Card, Divider, Heading, Label, Rating, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {BookRating, UserBooks} from "../../../types/API";

interface RatingsProps {
    userBook: UserBooks
}
export default function Ratings({userBook}:RatingsProps): React.ReactElement | null {
    const bookRating:BookRating|null = null

    const [overallEnjoyment, setOverallEnjoyment] = useState(userBook.userRating?.overallEnjoyment??0)

    const [notes, setNotes] = useState(userBook.userRating?.notes??"")
    const [isFiction, setIsFiction] = React.useState(userBook.userRating?.isFiction??true);


    const onNotesChange = (e:React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);

    return <Card variation="elevated">
        <Heading level={3}>Rating</Heading>
        <Heading level={5}>{userBook.title}</Heading>
        <SwitchField
            label={isFiction?"Fiction":"Non-Fiction"}
            labelPosition="start"
            isChecked={isFiction}
            onChange={e => setIsFiction(e.target.checked)}
        />
        <Divider/>

        <TextAreaField label="Notes" id="notes" name="notes" value={notes} onChange={onNotesChange} />
    </Card>

}