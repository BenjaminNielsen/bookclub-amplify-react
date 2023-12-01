import {generateClient} from "aws-amplify/api";
import {BookRating, CreateBookRatingInput, UpdateBookRatingInput, UserBooks} from "../types/API";
import {getBookRating, getUserBooks} from "../graphql/queries";
import {createBookRating, updateBookRating, updateUserBooks} from "../graphql/mutations";
import {redirect} from "react-router-dom";

const API = generateClient({authMode: 'userPool'})

//TODO make the whole ratings section less of a shit show
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

    try {
        const result = await API.graphql({query: createBookRating, variables: {input: ratingsData}});
        console.log("create book rating result: %o", result)
        let userBook = (await API.graphql({query: getUserBooks, variables: {id: form.get('bookId')}})).data.getUserBooks as UserBooks;
        userBook.userBooksUserRatingId = result.data.createBookRating.id
        await API.graphql({
            query: updateUserBooks,
            variables: {input: {id:userBook.id,
                    userBooksUserRatingId: userBook.userBooksUserRatingId}},
        });

    } catch (e) {
        console.error(e)
        throw e
    }

    return  redirect('../')
}

export async function editBookRatingsId({request}: any):Promise<Response> {
    console.log("calling editBookRatingsId with params: %o", request)
    const form = await request.formData();
    console.log("form: %o", form)

    const ratingsData:UpdateBookRatingInput = {
        id: form.get('ratingId'),
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

    try {
        await API.graphql({query: updateBookRating, variables: {input: ratingsData}});
    } catch (e) {
        console.error(e)
        throw e
    }

    return  redirect('../')
}