import React, {useState} from "react";
import {Card, Divider, Heading, StepperField, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {BookRating, UserBooks} from "../../../types/API";
import {useLoaderData} from "react-router-dom";


export default function Ratings(): React.ReactElement | null {
    const bookRating:BookRating | null = useLoaderData() as BookRating


    const [overallEnjoyment, setOverallEnjoyment] = useState(bookRating?.overallEnjoyment ?? 0)
    const handleOnOverallEnjoymentChange = (newValue: number) => setOverallEnjoyment(newValue);
    const [pacing, setPacing] = useState(bookRating?.pacing ?? 0)
    const handleOnPacingChange = (newValue: number) => setPacing(newValue);
    const [prose, setProse] = useState(bookRating?.prose ?? 0)
    const handleOnProseChange = (newValue: number) => setProse(newValue);
    const [qualityOfDiscussion, setQualityOfDiscussion] = useState(bookRating?.qualityOfDiscussion ?? 0)
    const handleOnQualityOfDiscussionChange = (newValue: number) => setQualityOfDiscussion(newValue);

    const [notes, setNotes] = useState(bookRating?.notes ?? "")
    const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState(bookRating?.isFiction ?? true);


    return <Card variation="elevated">
        <Heading level={3}>Rating</Heading>
        <SwitchField
            label={isFiction ? "Fiction" : "Non-Fiction"}
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

        <TextAreaField label="Notes" id="notes" name="notes" value={notes} onChange={onNotesChange}/>
    </Card>

}