import React, {useState} from "react";
import {Button, Card, Divider, Heading, StepperField, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {BookRating} from "../../../types/API";
import './RatingsDesign.scss';
import {useLoaderData, useNavigate, Form} from "react-router-dom";


export default function Ratings(): React.ReactElement | null {
    const bookRating: BookRating | null = useLoaderData() as BookRating

    const [overallEnjoyment, setOverallEnjoyment] = useState<number>(bookRating?.overallEnjoyment ?? 0)
    const handleOnOverallEnjoymentChange = (newValue: number) => setOverallEnjoyment(newValue);
    const [pacing, setPacing] = useState<number>(bookRating?.pacing ?? 0)
    const handleOnPacingChange = (newValue: number) => setPacing(newValue);
    const [prose, setProse] = useState<number>(bookRating?.prose ?? 0)
    const handleOnProseChange = (newValue: number) => setProse(newValue);
    const [qualityOfDiscussion, setQualityOfDiscussion] = useState<number>(bookRating?.qualityOfDiscussion ?? 0)
    const handleOnQualityOfDiscussionChange = (newValue: number) => setQualityOfDiscussion(newValue);
    const [storyTelling, setStoryTelling] = useState<number>(bookRating?.storytelling ?? 0)
    const handleOnStoryTellingChange = (newValue: number) => setStoryTelling(newValue);
    const [complexity, setComplexity] = useState<number>(bookRating?.complexity ?? 0)
    const handleOnComplexityChange = (newValue: number) => setComplexity(newValue);
    const [characterDevelopment, setCharacterDevelopment] = useState<number>(bookRating?.characterDevelopment ?? 0)
    const handleOnCharacterDevelopmentChange = (newValue: number) => setCharacterDevelopment(newValue);
    const [teaching, setTeaching] = useState<number>(bookRating?.teaching ?? 0)
    const handleOnTeachingChange = (newValue: number) => setTeaching(newValue);
    const [depthOfKnowledge, setDepthOfKnowledge] = useState<number>(bookRating?.depthOfKnowledge ?? 0)
    const handleOnDepthOfKnowledgeChange = (newValue: number) => setDepthOfKnowledge(newValue);
    const [relevance, setRelevance] = useState<number>(bookRating?.relevance ?? 0)
    const handleOnRelevanceChange = (newValue: number) => setRelevance(newValue);


    const [notes, setNotes] = useState<string>(bookRating?.notes ?? "")
    const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState<boolean>(bookRating?.isFiction ?? true);
    const navigate = useNavigate();


    return <Card variation="elevated">
        <Form method="post">
        <Heading className="RatingHeading" level={3}>Rating</Heading>
        <Heading className="bookTitle" level={5}>"Title?"</Heading>
        <div className="switchField">
            <SwitchField
                name="isFiction"
                value={isFiction.toString()}
                label={isFiction ? "Fiction" : "Non-Fiction"}
                labelPosition="start"
                isChecked={isFiction}
                onChange={e => setIsFiction(e.target.checked)}
            />
        </div>
        <input name="id" type="hidden" value={bookRating?.id??''}/>
        <Divider/>
        <StepperField
            className="enjoymentLabel"
            name = "overallEnjoyment"
            max={10}
            min={0}
            step={1}
            value={overallEnjoyment}
            variation="quiet"
            onStepChange={handleOnOverallEnjoymentChange}
            label="Overall Enjoyment"
        />
        <StepperField
            className="pacingLabel"
            name = "pacing"
            max={10}
            min={0}
            step={1}
            value={pacing}
            variation="quiet"
            onStepChange={handleOnPacingChange}
            label="Pacing"
        />
        <StepperField
            className="proseLabel"
            name = "prose"
            max={10}
            min={0}
            step={1}
            value={prose}
            variation="quiet"
            onStepChange={handleOnProseChange}
            label="Prose"
        />
        <StepperField
            className="qualityLabel"
            name="qualityOfDiscussion"
            max={10}
            min={0}
            step={1}
            value={qualityOfDiscussion}
            variation="quiet"
            onStepChange={handleOnQualityOfDiscussionChange}
            label="Quality Of Discussion"
        />
        {isFiction &&
            <StepperField
                className="storyTellingLabel"
                name = "storyTelling"
                max={10}
                min={0}
                step={1}
                value={storyTelling}
                variation="quiet"
                onStepChange={handleOnStoryTellingChange}
                label="Story Telling"
            />}

        {isFiction &&
            <StepperField
                className="complexityLabel"
                name="complexity"
                max={10}
                min={0}
                step={1}
                value={complexity}
                variation="quiet"
                onStepChange={handleOnComplexityChange}
                label="Complexity"
            />}

        {isFiction &&
            <StepperField
                className="characterDevelopmentLabel"
                name="characterDevelopment"
                max={10}
                min={0}
                step={1}
                value={characterDevelopment}
                variation="quiet"
                onStepChange={handleOnCharacterDevelopmentChange}
                label="Character Development"
            />}

        {!isFiction &&
            <StepperField
                className="teachingLabel"
                name="teaching"
                max={10}
                min={0}
                step={1}
                value={teaching}
                variation="quiet"
                onStepChange={handleOnTeachingChange}
                label="Teaching"
            />}

        {!isFiction &&
            <StepperField
                className="depthLabel"
                name="depthOfKnowledge"
                max={10}
                min={0}
                step={1}
                value={depthOfKnowledge}
                variation="quiet"
                onStepChange={handleOnDepthOfKnowledgeChange}
                label="Depth of Knowledge"
            />}

        {!isFiction &&
            <StepperField
                className="relevanceLabel"
                name="relevance"
                max={10}
                min={0}
                step={1}
                value={relevance}
                variation="quiet"
                onStepChange={handleOnRelevanceChange}
                label="Relevance"

            />}
        <div>

            <Button colorTheme="error" className="cancelButton" onClick={() => navigate(-1)}>Cancel</Button>


            <Button variation="primary" type="submit" className="submitButton">Submit</Button>

        </div>

        <TextAreaField className="notesLabel" label="Notes" id="notes" name="notes" value={notes}
                       onChange={onNotesChange}/>
        </Form>
    </Card>


}