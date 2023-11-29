import {SuggestionBooks} from "../types/API";
import {listSuggestionBooks} from "../graphql/queries";
import {generateClient} from 'aws-amplify/api';
import {redirect} from "react-router-dom";
import {createSuggestionBooks} from "../graphql/mutations";

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