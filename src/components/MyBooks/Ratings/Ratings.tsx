import React, {useState} from "react";
import {Card, Divider, Heading,StepperField, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {BookRating, UserBooks} from "../../../types/API";

interface RatingsProps {
    userBook: UserBooks
}
export default function Ratings({userBook}:RatingsProps): React.ReactElement | null {
    const bookRating:BookRating|null = null

    const [overallEnjoyment, setOverallEnjoyment] = useState(userBook.userRating?.overallEnjoyment??0)
    const handleOnOverallEnjoymentChange = (newValue: number) => setOverallEnjoyment(newValue);
    const [pacing, setPacing] = useState(userBook.userRating?.pacing??0)
    const handleOnPacingChange = (newValue: number) => setPacing(newValue);
    const [prose, setProse] = useState(userBook.userRating?.prose??0)
    const handleOnProseChange = (newValue: number) => setProse(newValue);
    const [qualityOfDiscussion, setQualityOfDiscussion] = useState(userBook.userRating?.qualityOfDiscussion??0)
    const handleOnQualityOfDiscussionChange = (newValue: number) => setQualityOfDiscussion(newValue);

    const [notes, setNotes] = useState(userBook.userRating?.notes??"")
    const onNotesChange = (e:React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState(userBook.userRating?.isFiction??true);





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
        <StepperField
            max={10}
            min={0}
            step={1}
            value={overallEnjoyment}
            variation="quiet"
            onStepChange={handleOnOverallEnjoymentChange}
            label="Overall Enjoyment"
        />
        <StepperField
            max={10}
            min={0}
            step={1}
            value={pacing}
            variation="quiet"
            onStepChange={handleOnPacingChange}
            label="Pacing"
        />
        <StepperField
            max={10}
            min={0}
            step={1}
            value={prose}
            variation="quiet"
            onStepChange={handleOnProseChange}
            label="Prose"
        />
        <StepperField
            max={10}
            min={0}
            step={1}
            value={qualityOfDiscussion}
            variation="quiet"
            onStepChange={handleOnQualityOfDiscussionChange}
            label="Quality Of Discussion"
        />

        <TextAreaField label="Notes" id="notes" name="notes" value={notes} onChange={onNotesChange} />
    </Card>

}