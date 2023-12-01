import {UserBooks} from "../types/API";
import {getUserBooks, listUserBooks} from "../graphql/queries";
import {generateClient} from 'aws-amplify/api';
import {redirect} from "react-router-dom";
import {createUserBooks, deleteUserBooks, updateUserBooks} from "../graphql/mutations";

const API = generateClient({authMode: 'userPool'})

export async function fetchUserBooks(): Promise<UserBooks[]> {
    console.log("calling fetchUserBooks")
    const apiData = await API.graphql({query: listUserBooks});
    console.log("returning: %o", apiData.data.listUserBooks.items)
    return apiData.data.listUserBooks.items as UserBooks[]
}

export async function getUserBookById({params}:any):Promise<UserBooks> {
    console.log("calling getUserBookById")
    console.log("params: %o", params)

    const response = await API.graphql({query: getUserBooks, variables: {id: params.id}});
    console.log("returning: %o", response.data.getUserBooks)

    return  response.data.getUserBooks as UserBooks
}

export async function deleteUserBookById({ params }: any) {

    await API.graphql({
                query: deleteUserBooks,
                variables: {input: {"id": params.id,}},
            });
    return redirect("../");
}

export async function addUserBook({request}: any){
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
            query: createUserBooks,
            variables: {input: data},
        });
    } catch (e) {
        console.error("Caught error creating book: %o", e)
    }
    return redirect(`../`)
}

export async function updateUserBook({ request, params }: any):Promise<Response> {


    const form = await request.formData();
    console.log("form: %o", form)
    const updates = Object.fromEntries(form);
    console.log("here's the params: %o", params)
    console.log("updates: %o", updates)

    try {
        let response = await API.graphql({
            query: updateUserBooks,
            variables: {input: {id: params.id,
                        ...updates}},
        });
        console.log("response: %o", response)
    } catch (e) {
        console.error("Caught error updating book: %o", e)
    }
    return redirect(`../`)
}