import {API} from "aws-amplify";
import {createBook as createBookMutation} from "../graphql/mutations";
import {Button, Flex, TextField, View} from "@aws-amplify/ui-react";
import React from "react";
import BookCreateForm from "../ui-components/BookCreateForm";

export default function AddBook() {

    async function createBook(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            isbn:form.get("isbn"),
            title: form.get("title"),
            description: form.get("description"),
            author: form.get("author"),
            numberInSeries: form.get("numberInSeries"),
            wordCount: form.get("wordCount"),
        };
        await API.graphql({
            query: createBookMutation,
            variables: { input: data },
        });
        event.target.reset();
    }

    return (
    <View as="form" margin="3rem 0" onSubmit={createBook}>
        <Flex direction="row" justifyContent="center">
            {/*<TextField*/}
            {/*    name="isbn"*/}
            {/*    placeholder="ISBN"*/}
            {/*    label="ISBN"*/}
            {/*    labelHidden*/}
            {/*    variation="quiet"*/}
            {/*    required*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*    name="title"*/}
            {/*    placeholder="Book Title"*/}
            {/*    label="Book Title"*/}
            {/*    labelHidden*/}
            {/*    variation="quiet"*/}
            {/*    required*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*    name="description"*/}
            {/*    placeholder="Book Description"*/}
            {/*    label="Book Description"*/}
            {/*    labelHidden*/}
            {/*    variation="quiet"*/}
            {/*    required*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*    name="author"*/}
            {/*    placeholder="Author"*/}
            {/*    label="Author"*/}
            {/*    labelHidden*/}
            {/*    variation="quiet"*/}
            {/*    required*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*    name="numberInSeries"*/}
            {/*    placeholder="Number in Series"*/}
            {/*    label="Number in Series"*/}
            {/*    labelHidden*/}
            {/*    variation="quiet"*/}
            {/*    required*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*    name="wordCount"*/}
            {/*    placeholder="Word Count"*/}
            {/*    label="Word Count"*/}
            {/*    labelHidden*/}
            {/*    variation="quiet"*/}
            {/*    required*/}
            {/*/>*/}
            <BookCreateForm></BookCreateForm>
            {/*<Button type="submit" variation="primary">*/}
            {/*    Create Book*/}
            {/*</Button>*/}
        </Flex>
    </View>
    )
}
