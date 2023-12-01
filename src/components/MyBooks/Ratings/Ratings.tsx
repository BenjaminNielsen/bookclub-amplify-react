import React, {useState} from "react";
import {Button, Card, Divider, Heading, StepperField, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {UserBooks} from "../../../types/API";
import './RatingsDesign.scss';
import {useLoaderData, useNavigate, Form} from "react-router-dom";
import RatingConfig from "../../../types/RatingConfig";


export default function Ratings(): React.ReactElement | null {
    const userBook:UserBooks| null =useLoaderData() as UserBooks

    const [overallEnjoyment, setOverallEnjoyment] = useState<number>(userBook?.userRating?.overallEnjoyment ?? 0)
    const handleOnOverallEnjoymentChange = (newValue: number) => setOverallEnjoyment(newValue);
    const [pacing, setPacing] = useState<number>(userBook?.userRating?.pacing ?? 0)
    const handleOnPacingChange = (newValue: number) => setPacing(newValue);
    const [prose, setProse] = useState<number>(userBook?.userRating?.prose ?? 0)
    const handleOnProseChange = (newValue: number) => setProse(newValue);
    const [qualityOfDiscussion, setQualityOfDiscussion] = useState<number>(userBook?.userRating?.qualityOfDiscussion ?? 0)
    const handleOnQualityOfDiscussionChange = (newValue: number) => setQualityOfDiscussion(newValue);
    const [storyTelling, setStoryTelling] = useState<number>(userBook?.userRating?.storytelling ?? 0)
    const handleOnStoryTellingChange = (newValue: number) => setStoryTelling(newValue);
    const [complexity, setComplexity] = useState<number>(userBook?.userRating?.complexity ?? 0)
    const handleOnComplexityChange = (newValue: number) => setComplexity(newValue);
    const [characterDevelopment, setCharacterDevelopment] = useState<number>(userBook?.userRating?.characterDevelopment ?? 0)
    const handleOnCharacterDevelopmentChange = (newValue: number) => setCharacterDevelopment(newValue);
    const [teaching, setTeaching] = useState<number>(userBook?.userRating?.teaching ?? 0)
    const handleOnTeachingChange = (newValue: number) => setTeaching(newValue);
    const [depthOfKnowledge, setDepthOfKnowledge] = useState<number>(userBook?.userRating?.depthOfKnowledge ?? 0)
    const handleOnDepthOfKnowledgeChange = (newValue: number) => setDepthOfKnowledge(newValue);
    const [relevance, setRelevance] = useState<number>(userBook?.userRating?.relevance ?? 0)
    const handleOnRelevanceChange = (newValue: number) => setRelevance(newValue);


    const [notes, setNotes] = useState<string>(userBook?.userRating?.notes ?? "")
    const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState<boolean>(userBook?.userRating?.isFiction ?? true);
    const navigate = useNavigate();

    return <Card variation="elevated">
        <Form method="post">
        <Heading className="RatingHeading" level={3}>Rating</Heading>
        <Heading className="bookTitle" level={5}>{userBook?.title}</Heading>
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
            <input name="bookId" type="hidden" value={userBook?.id??""}/>

            <input name="ratingId" type="hidden" value={userBook?.userBooksUserRatingId??""}/>
        <Divider/>
        <StepperField
            className="enjoymentLabel"
            name = "overallEnjoyment"
            max={RatingConfig.MAX_RATING}
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
            max={RatingConfig.MAX_RATING}
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
            max={RatingConfig.MAX_RATING}
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
            max={RatingConfig.MAX_RATING}
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
                name = "storytelling"
                max={RatingConfig.MAX_RATING}
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
                max={RatingConfig.MAX_RATING}
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
                max={RatingConfig.MAX_RATING}
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
                max={RatingConfig.MAX_RATING}
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
                max={RatingConfig.MAX_RATING}
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
                max={RatingConfig.MAX_RATING}
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