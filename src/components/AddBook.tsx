import {API} from "aws-amplify";
import {createBook as createBookMutation} from "../graphql/mutations";
import {Button, Flex, TextField, View} from "@aws-amplify/ui-react";
import React from "react";
import BookCreateForm from "../ui-components/BookCreateForm";
import ISBN from 'isbn3';

export default function AddBook() {

    async function createBook(event: any) {
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

    function onIsbnChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("Isbn change fired. Event: %o", e)
        console.log("e.target.value: %o", e.target.value)
        const newIsbnValue = e.target.value
        const isbnResult:ISBN|null = ISBN.parse(newIsbnValue);
        console.log("isbnResult %o", isbnResult)
    }

    return (
    <View as="form" margin="3rem 0" onSubmit={createBook}>
        <Flex direction="row" justifyContent="center">
            <TextField
                name="isbn"
                placeholder="ISBN"
                label="ISBN"
                labelHidden
                variation="quiet"
                onChange={onIsbnChange}
            />
            <TextField
                name="title"
                placeholder="Book Title"
                label="Book Title"
                labelHidden
                variation="quiet"
                required
            />
            <TextField
                name="description"
                placeholder="Book Description"
                label="Book Description"
                labelHidden
                variation="quiet"
            />
            <TextField
                name="author"
                placeholder="Author"
                label="Author"
                labelHidden
                variation="quiet"
                required
            />
            <TextField
                name="numberInSeries"
                placeholder="Number in Series"
                label="Number in Series"
                labelHidden
                variation="quiet"
                required
            />
            <TextField
                name="wordCount"
                placeholder="Word Count"
                label="Word Count"
                labelHidden
                variation="quiet"
            />
            {/*<BookCreateForm></BookCreateForm>*/}
            <Button type="submit" variation="primary">
                Create Book
            </Button>
        </Flex>
    </View>
    )
}
