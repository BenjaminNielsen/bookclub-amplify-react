import {API} from "aws-amplify";
import {createBook as createBookMutation} from "../../graphql/mutations";
import {Button, Grid, TextField} from "@aws-amplify/ui-react";
import React, {useState} from "react";
import ISBN from 'isbn3';
import IsbnField from "./Fields/IsbnField";
import {GoogleBookInfo} from "../../types/GoogleBookInfo";

export default function AddBook() {

    const [givenIsbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState([''])
    const [hasIsbnError, setHasIsbnError] = React.useState(false);
    const [googleBookData, setGoogleBookData] = React.useState(null as unknown as GoogleBookInfo);


    async function createBook(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            isbn: form.get("isbn"),
            title: form.get("title"),
            description: form.get("description"),
            author: form.get("author"),
            numberInSeries: form.get("numberInSeries"),
            wordCount: form.get("wordCount"),
        };
        await API.graphql({
            query: createBookMutation,
            variables: {input: data},
        });
        event.target.reset();
    }

    function getBookInfo(isbn: ISBN): GoogleBookInfo | null {
        const isbnString = isbn.isIsbn13 ? isbn.isbn13 : isbn.isbn10
        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnString + '&key=AIzaSyCT6QISwU6W6GLjEhnC5Iw1gnQpHo92G5g')
            .then(response => response.json())
            .then((json) => {
                console.log("Json response: %o", json)
                const book = json.items[0].volumeInfo
                const bookInfo = new GoogleBookInfo(book.title, book.subtitle, book.authors, book.publisher, book.publishedDate, book.description, book.pageCount, book.categories, book.averageRating)
                setGoogleBookData(bookInfo)
            })
            .catch(error => console.error(error));

        return googleBookData
    }

    function onIsbnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newIsbnValue: string = e.target.value
        setIsbn(newIsbnValue)
        const isbnResult: ISBN | null = ISBN.parse(newIsbnValue);
        isbnResult ? setHasIsbnError(false) : setHasIsbnError(true)

        if (isbnResult?.isValid) {
            const googleApiResult = getBookInfo(isbnResult)
            if (googleApiResult) {
                setTitle(googleApiResult.title)
                setAuthor(googleApiResult.authors)
                setDescription(googleApiResult.description)
            }
        }
    }

    return (
        <Grid
            as="form"
            rowGap="15px"
            columnGap="15px"
            padding="20px"
            onSubmit={createBook}
        >
            <IsbnField isbn={givenIsbn} hasError={hasIsbnError} onChange={onIsbnChange}></IsbnField>
            <TextField
                name="title"
                placeholder="Book Title"
                label="Book Title"
                variation="quiet"
                value={title}
                required
            />
            <TextField
                name="description"
                placeholder="Book Description"
                label="Book Description"
                value={description}
                variation="quiet"/>
            <TextField
                name="author"
                placeholder="Author"
                label="Author"
                variation="quiet"
                value={author}
                required/>
            <TextField
                name="numberInSeries"
                placeholder="Number in Series"
                label="Number in Series"
                variation="quiet"
                required/>
            <TextField
                name="wordCount"
                placeholder="Word Count"
                label="Word Count"
                variation="quiet"/>
            <Button type="submit" variation="primary">
                Create Book
            </Button>

        </Grid>
    )
}
