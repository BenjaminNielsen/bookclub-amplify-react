import {SuggestionBooks} from "../types/API";
import {getSuggestionBooks, listSuggestionBooks} from "../graphql/queries";
import {generateClient} from 'aws-amplify/api';
import {redirect} from "react-router-dom";
import {createSuggestionBooks, updateSuggestionBooks} from "../graphql/mutations";

const API = generateClient({authMode: 'userPool'})

export async function fetchSuggestionBooks(): Promise<SuggestionBooks[]> {
    const apiData: any = await API.graphql({query: listSuggestionBooks});
    return apiData.data.listSuggestionBooks.items;
}

export async function addSuggestionBook({request}: any){
    console.log("add book request received: %o", request)
    const form = await request.formData();
    console.log("form: %o", form)
    const data = {
        isbn: form.get("isbn") as string,
        title: form.get("title") as string,
        thumbnailUrl: form.get("thumbnailUrl") as string,
        description: form.get("description") as string,
        author: (form.get("author") as String)?.split(', '),
        numberInSeries: form.get("numberInSeries") as string,
        wordCount: parseInt(form.get("wordCount") as string),
        genre: (form.get("genre") as String)?.split(', ')
    };
    console.log("data: %o", data)

    try {
        await API.graphql({
            query: createSuggestionBooks,
            variables: {input: data},
        });
    } catch (e) {
        console.error("Caught error creating book: %o", e)
        //setHasBookCreateError(true)
    }
    return redirect(`../`)
}

export async function getSuggestionBookById({params}:any):Promise<SuggestionBooks> {
    console.log("calling getUserBookById")
    console.log("params: %o", params)

    const response = await API.graphql({query: getSuggestionBooks, variables: {id: params.id}});
    console.log("returning: %o", response.data.getSuggestionBooks)

    return response.data.getSuggestionBooks as SuggestionBooks
}

export async function updateSuggestionBook({ request, params }: any):Promise<Response> {
    const form = await request.formData();
    console.log("form: %o", form)
    const updates = Object.fromEntries(form);
    console.log("here's the params: %o", params)
    console.log("updates: %o", updates)

    try {
        let response = await API.graphql({
            query: updateSuggestionBooks,
            variables: {input: {id: params.id,
                    ...updates}},
        });
        console.log("response: %o", response)
    } catch (e) {
        console.error("Caught error updating book: %o", e)
    }
    return redirect(`../`)
}