import React, {useState} from "react";
import {
    Button,
    Card,
    Divider,
    Grid,
    Heading,
    StepperField,
    SwitchField,
    TextAreaField,
    useTheme,
    View
} from "@aws-amplify/ui-react";
import {BookRating} from "../../../types/API";
import './RatingsDesign.scss';
import {Link, useLoaderData, useNavigate} from "react-router-dom";


export default function Ratings(): React.ReactElement | null {
    const bookRating: BookRating | null = useLoaderData() as BookRating
    const {tokens} = useTheme();


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
    const navigate = useNavigate();


    return <Card className="card" variation="elevated">
        <Grid
            templateColumns={{base: '1fr 1fr', large: '1fr 1fr 1fr'}}
            autoRows='min-content'
            gap={tokens.space.xs}
        >
            <View columnStart="1" columnEnd="-1">
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
            </View>

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
                <TextAreaField columnStart="1" columnEnd="-1" className="notesLabel" label="Notes" id="notes" name="notes"  value={notes}
                               onChange={onNotesChange}/>
                <View columnStart="1" columnEnd="-1">
                    <Button colorTheme="error" className="cancelButton" onClick={() => navigate(-1)}>Cancel</Button>
                    <Link to="../">
                        <Button variation="primary" className="submitButton">Submit</Button>
                    </Link>
                </View>
        </Grid>
    </Card>

}