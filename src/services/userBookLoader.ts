import {UserBooks} from "../types/API";
import {getUserBooks, listUserBooks} from "../graphql/queries";
import {generateClient} from 'aws-amplify/api';

const API = generateClient({authMode: 'userPool'})

export async function fetchUserBooks(): Promise<UserBooks[]> {
    console.log("calling fetchUserBooks")
    const apiData = await API.graphql({query: listUserBooks});
    console.log("returning: %o", apiData.data.listUserBooks.items)
    return apiData.data.listUserBooks.items as UserBooks[]
}

export async function getUserBookById({params}:any):Promise<UserBooks> {
    console.log("calling getUserBookById")

    const response = await API.graphql({query: getUserBooks, variables: {id: params.id}});
    console.log("returning: %o", response.data.getUserBooks)

    return  response.data.getUserBooks as UserBooks
}