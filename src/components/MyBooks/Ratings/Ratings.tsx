import React, {useState} from "react";
import {Card, Divider, Heading, StepperField, SwitchField, TextAreaField} from "@aws-amplify/ui-react";
import {BookRating, UserBooks} from "../../../types/API";

interface RatingsProps {
    userBook: UserBooks | undefined
}

export default function Ratings({userBook}: RatingsProps): React.ReactElement | null {
    const bookRating: BookRating | null = null

    const [overallEnjoyment, setOverallEnjoyment] = useState(userBook?.userRating?.overallEnjoyment ?? 0)
    const handleOnOverallEnjoymentChange = (newValue: number) => setOverallEnjoyment(newValue);
    const [pacing, setPacing] = useState(userBook?.userRating?.pacing ?? 0)
    const handleOnPacingChange = (newValue: number) => setPacing(newValue);
    const [prose, setProse] = useState(userBook?.userRating?.prose ?? 0)
    const handleOnProseChange = (newValue: number) => setProse(newValue);
    const [qualityOfDiscussion, setQualityOfDiscussion] = useState(userBook?.userRating?.qualityOfDiscussion ?? 0)
    const handleOnQualityOfDiscussionChange = (newValue: number) => setQualityOfDiscussion(newValue);
    const [storyTelling, setStoryTelling] = useState(userBook?.userRating?.storytelling ?? 0)
    const handleOnStoryTellingChange = (newValue: number) => setStoryTelling(newValue);
    const [complexity, setComplexity] = useState(userBook?.userRating?.complexity ?? 0)
    const handleOnComplexityChange = (newValue: number) => setComplexity(newValue);
    const [characterDevelopment, setCharacterDevelopment] = useState(userBook?.userRating?.characterDevelopment ?? 0)
    const handleOnCharacterDevelopmentChange = (newValue: number) => setCharacterDevelopment(newValue);
    const [teaching, setTeaching] = useState(userBook?.userRating?.teaching ?? 0)
    const handleOnTeachingChange = (newValue: number) => setTeaching(newValue);
    const [depthOfKnowledge, setDepthOfKnowledge] = useState(userBook?.userRating?.depthOfKnowledge ?? 0)
    const handleOnDepthOfKnowledgeChange = (newValue: number) => setDepthOfKnowledge(newValue);
    const [relevance, setRelevance] = useState(userBook?.userRating?.relevance ?? 0)
    const handleOnRelevanceChange = (newValue: number) => setRelevance(newValue);




    const [notes, setNotes] = useState(userBook?.userRating?.notes ?? "")
    const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState(userBook?.userRating?.isFiction ?? true);

    return <Card variation="elevated">
        <Heading level={3}>Rating</Heading>
        <Heading level={5}>{userBook?.title}</Heading>
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
        {isFiction &&
        <StepperField
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
            max={10}
            min={0}
            step={1}
            value={relevance}
            variation="quiet"
            onStepChange={handleOnRelevanceChange}
            label="Relevance"
        
        />}


        <TextAreaField label="Notes" id="notes" name="notes" value={notes} onChange={onNotesChange}/>
    </Card>

}