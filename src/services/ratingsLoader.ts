import {generateClient} from "aws-amplify/api";
import {BookRating} from "../types/API";
import {getBookRating, getUserBooks, listUserBooks} from "../graphql/queries";

const API = generateClient({authMode: 'userPool'})

export async function getBookRatingsId({params}:any):Promise<BookRating | null> {
    console.log("calling getUserBookById with params: %o", params)

    const response = await API.graphql({query: getBookRating, variables: {id: params.id}});
    console.log("response: %o", response)

    console.log("returning: %o", response.data.getBookRating)

    return  response.data.getBookRating as BookRating | null
}