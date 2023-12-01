import React, {useState} from "react";
import {Button, Divider, Grid, Heading, SwitchField, TextAreaField, useTheme, View} from "@aws-amplify/ui-react";
import {UserBooks} from "../../../types/API";
import './Ratings.scss';
import {Form, useLoaderData, useNavigate} from "react-router-dom";
import RatingsStepperField from "./Steppers/RatingsStepperField/RatingsStepperField";

export default function Ratings(): React.ReactElement | null {
    const {tokens} = useTheme();
    const userBook: UserBooks | null = useLoaderData() as UserBooks

    const [notes, setNotes] = useState<string>(userBook?.userRating?.notes ?? "")
    const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setNotes(e.target.value);
    const [isFiction, setIsFiction] = useState<boolean>(userBook?.userRating?.isFiction ?? true);
    const navigate = useNavigate();

    return (
        <Form method="post">
            <Grid
                templateColumns={{base: '1fr 1fr', large: '1fr 1fr 1fr'}}
                autoRows='min-content'
                gap={tokens.space.xs}
            >
                <View columnStart="1" columnEnd="-1">
                    <Heading className="RatingHeading" level={3}>Rating</Heading>
                    <Heading className="bookTitle" level={5}>{userBook.title}</Heading>
                    <div className="switchField">
                        <SwitchField
                            value={isFiction.toString()}
                            name="isFiction"
                            label={isFiction ? "Fiction" : "Non-Fiction"}
                            labelPosition="start"
                            isChecked={isFiction}
                            onChange={e => setIsFiction(e.target.checked)}
                        />
                    </div>
                    <Divider/>
                </View>
                <input name="bookId" type="hidden" value={userBook?.id ?? ""}/>
                <input name="ratingId" type="hidden" value={userBook?.userBooksUserRatingId ?? ""}/>

                <RatingsStepperField
                    name="overallEnjoyment"
                    label="Overall Enjoyment"
                    startingValue={userBook?.userRating?.overallEnjoyment ?? 0}
                    hidden={false}
                />
                <RatingsStepperField
                    name="pacing"
                    label="Pacing"
                    startingValue={userBook?.userRating?.pacing ?? 0}
                    hidden={false}
                />
                <RatingsStepperField
                    name="prose"
                    label="Prose"
                    startingValue={userBook?.userRating?.prose ?? 0}
                    hidden={false}
                />
                <RatingsStepperField
                    name="qualityOfDiscussion"
                    label="Quality Of Discussion"
                    startingValue={userBook?.userRating?.qualityOfDiscussion ?? 0}
                    hidden={false}
                />
                <RatingsStepperField
                    name="storytelling"
                    label="Story Telling"
                    startingValue={userBook?.userRating?.storytelling ?? 0}
                    hidden={!isFiction}
                />
                <RatingsStepperField
                    name="complexity"
                    label="Complexity"
                    startingValue={userBook?.userRating?.complexity ?? 0}
                    hidden={!isFiction}
                />
                <RatingsStepperField
                    name="teaching"
                    label="Teaching"
                    startingValue={userBook?.userRating?.teaching ?? 0}
                    hidden={isFiction}
                />
                <RatingsStepperField
                    name="depthOfKnowledge"
                    label="Depth of Knowledge"
                    startingValue={userBook?.userRating?.depthOfKnowledge ?? 0}
                    hidden={isFiction}
                />

            </Grid>
            <Grid templateColumns={{base: '1fr', large: '1fr 1fr 1fr 1fr'}}
                  autoRows='min-content'
                  gap={tokens.space.xs}>
                <View></View>
                <View columnSpan={{base: 1, large: 2}}>
                    <RatingsStepperField
                        name="characterDevelopment"
                        label="Character Development"
                        startingValue={userBook?.userRating?.characterDevelopment ?? 0}
                        hidden={!isFiction}
                    />
                    <RatingsStepperField
                        name="relevance"
                        label="Relevance"
                        startingValue={userBook?.userRating?.relevance ?? 0}
                        hidden={isFiction}
                    />

                    <TextAreaField columnStart="1" columnEnd="-1" className="notesLabel" label="Notes" id="notes"
                                   name="notes" value={notes} onChange={onNotesChange}/>
                    <View columnStart="1" columnEnd="-1">
                        <Button colorTheme="error" className="cancelButton" onClick={() => navigate(-1)}>Cancel</Button>
                        <Button variation="primary" type="submit" className="submitButton">Submit</Button>
                    </View>
                </View>
            </Grid>
        </Form>
    )
}