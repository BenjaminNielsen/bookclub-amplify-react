import React, {useState} from "react";
import {Button, Card, Divider, Heading, StepperField, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {BookRating, UserBooks} from "../../../types/API";
import './RatingsDesign.scss';
import {useLoaderData, Link} from "react-router-dom";
import UserBookDetails from "../UserBookDetails/UserBookDetails";


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
    const [storyTelling, setStoryTelling] = useState(bookRating?.storytelling ?? 0)
    const handleOnStoryTellingChange = (newValue: number) => setStoryTelling(newValue);
    const [complexity, setComplexity] = useState(bookRating?.complexity ?? 0)
    const handleOnComplexityChange = (newValue: number) => setComplexity(newValue);
    const [characterDevelopment, setCharacterDevelopment] = useState(bookRating?.characterDevelopment ?? 0)
    const handleOnCharacterDevelopmentChange = (newValue: number) => setCharacterDevelopment(newValue);
    const [teaching, setTeaching] = useState(bookRating?.teaching ?? 0)
    const handleOnTeachingChange = (newValue: number) => setTeaching(newValue);
    const [depthOfKnowledge, setDepthOfKnowledge] = useState(bookRating?.depthOfKnowledge ?? 0)
    const handleOnDepthOfKnowledgeChange = (newValue: number) => setDepthOfKnowledge(newValue);
    const [relevance, setRelevance] = useState(bookRating?.relevance ?? 0)
    const handleOnRelevanceChange = (newValue: number) => setRelevance(newValue);


    const [notes, setNotes] = useState(bookRating?.notes ?? "")
    const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState(bookRating?.isFiction ?? true);


    return <Card variation="elevated">
        <Heading className="RatingHeading" level={3}>Rating</Heading>
        <Heading className="bookTitle" level={5}>"Title?"</Heading>
        <div className="switchField">
        <SwitchField
            label={isFiction ? "Fiction" : "Non-Fiction"}
            labelPosition="start"
            isChecked={isFiction}
            onChange={e => setIsFiction(e.target.checked)}
        />
        </div>

        <Divider/>
        <StepperField
            className="enjoymentLabel"
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
            max={10}
            min={0}
            step={1}
            value={relevance}
            variation="quiet"
            onStepChange={handleOnRelevanceChange}
            label="Relevance"

        />}
        <div>
        <Link to="http://localhost:3000/my-books">
                <Button type="button" colorTheme="error" className="cancelButton">Cancel</Button>
                </Link>

                <Link to="http://localhost:3000/my-books">
                <Button type="submit" variation="primary" className="submitButton" >Submit</Button>
                </Link>
        </div>

        <TextAreaField className="notesLabel" label="Notes" id="notes" name="notes" value={notes} onChange={onNotesChange}/>
    </Card>


}