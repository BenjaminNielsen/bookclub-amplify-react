import {generateClient} from "aws-amplify/api";
import {BookRating, CreateBookRatingInput} from "../types/API";
import {getBookRating} from "../graphql/queries";
import {createBookRating} from "../graphql/mutations";
import {redirect} from "react-router-dom";

const API = generateClient({authMode: 'userPool'})

export async function getBookRatingsId({params}:any):Promise<BookRating | null> {
    console.log("calling getBookRatingsId with params: %o", params)

    const response = await API.graphql({query: getBookRating, variables: {id: params.id}});
    console.log("response: %o", response)

    return  response.data.getBookRating as BookRating | null
}

export async function createBookRatingsId({request}: any):Promise<Response> {
    console.log("calling createBookRatingsId with params: %o", request)
    const form = await request.formData();
    console.log("form: %o", form)

    const ratingsData:CreateBookRatingInput = {
        id:form.get('id'),
        overallEnjoyment: form.get('overallEnjoyment'),
        pacing: form.get('pacing'),
        prose: form.get('prose'),
        qualityOfDiscussion: form.get('qualityOfDiscussion'),
        isFiction: JSON.parse(form.get('isFiction')),
        storytelling: form.get('storytelling'),
        complexity: form.get('complexity'),
        characterDevelopment: form.get('characterDevelopment'),
        teaching:form.get('teaching'),
        depthOfKnowledge: form.get('depthOfKnowledge'),
        relevance: form.get('relevance'),
        notes: form.get('notes')
    }
    console.log("form data: %o", ratingsData)
    const result = await API.graphql({query: createBookRating, variables: {input: ratingsData}});
    console.log("result: %o", result)

    return  redirect('../')
}