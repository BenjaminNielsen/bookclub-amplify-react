import {SuggestionBooks} from "../types/API";
import {listSuggestionBooks} from "../graphql/queries";
import {generateClient} from 'aws-amplify/api';

const API = generateClient({authMode: 'userPool'})

export async function fetchSuggestionBooks(): Promise<SuggestionBooks[]> {
    const apiData: any = await API.graphql({query: listSuggestionBooks});
    return apiData.data.listSuggestionBooks.items;
}