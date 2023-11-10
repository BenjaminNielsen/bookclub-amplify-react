import {API} from "aws-amplify";
import {createBook as createBookMutation} from "../../graphql/mutations";
import {Button, Card, Grid, TextField} from "@aws-amplify/ui-react";
import React, {useState} from "react";
import ISBN from 'isbn3';
import IsbnField from "./Fields/IsbnField";
import TitleField from "./Fields/TitleField";
import DescriptionField from "./Fields/DescriptionField";
import AuthorField from "./Fields/AuthorField";
import NumberInSeriesField from "./Fields/NumberInSeriesField";
import GenreField from "./Fields/GenreField";

import {GoogleBookInfo} from "../../types/GoogleBookInfo";
import WordCountField from "./Fields/WordCount";


export default function AddBook() {

    const [givenIsbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [numberInSeries, setNumberInSeries] = useState('Standalone')
    const [wordCount, setWordCount] = useState(0)

    const [hasIsbnError, setHasIsbnError] = React.useState(false);

    async function createBook(event: any) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            isbn: form.get("isbn"),
            title: form.get("title"),
            description: form.get("description"),
            author: (form.get("author") as String)?.split(', '),
            numberInSeries: form.get("numberInSeries"),
            wordCount: form.get("wordCount"),
            genre:(form.get("genre") as String)?.split(', ')
        };
        await API.graphql({
            query: createBookMutation,
            variables: {input: data},
        });
        event.target.reset();
    }
    function setFieldsToDefault(){
        setTitle('')
        setAuthor('')
        setDescription('')
        setNumberInSeries('Standalone')
        setGenre('')
    }
    function getBookInfo(isbn: ISBN) {
        const isbnString = isbn.isIsbn13 ? isbn.isbn13 : isbn.isbn10
        fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbnString + '&key=AIzaSyCT6QISwU6W6GLjEhnC5Iw1gnQpHo92G5g')
            .then(response => response.json())
            .then((json) => {
                console.log("Json response: %o", json)
                const book = json.items[0].volumeInfo
                const bookInfo = new GoogleBookInfo(book.title, book.subtitle, book.authors, book.publisher, book.publishedDate, book.description, book.pageCount, book.categories, book.averageRating)
                setTitle(bookInfo.title)
                setAuthor(bookInfo.authors.join(', '))
                setDescription(bookInfo.description)
                setGenre(bookInfo.categories.join(', '))
            })
            .catch(error => console.error(error));
    }

    function onIsbnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newIsbnValue:string = e.target.value
        setIsbn(newIsbnValue)
        const isbnResult: ISBN | null = ISBN.parse(newIsbnValue);
        isbnResult ? setHasIsbnError(false) : setHasIsbnError(true)
        if (isbnResult==null || !isbnResult.isValid) {
            setFieldsToDefault()
            return
        }

        getBookInfo(isbnResult)
    }
    function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }
    function onDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value)
    }
    function onAuthorChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAuthor(e.target.value)
    }
    function onGenreChange(e: React.ChangeEvent<HTMLInputElement>) {
        setGenre(e.target.value)
    }
    function onNumberInSeriesChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAuthor(e.target.value)
    }
    function onWordCountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWordCount(Number.parseInt(e.target.value))
    }

    return (
        <Card variation="outlined">
            <Grid
                as="form"
                rowGap="20px"
                columnGap="15px"
                padding="20px"
                onSubmit={createBook}
            >
                <IsbnField isbn={givenIsbn} hasError={hasIsbnError} onChange={onIsbnChange}/>
                <TitleField title={title} hasError={false} onChange={onTitleChange}/>
                <DescriptionField description={description} hasError={false} onChange={onDescriptionChange}/>
                <AuthorField authors={author} hasError={false} onChange={onAuthorChange}/>
                <GenreField genres={genre} hasError={false} onChange={onGenreChange}/>
                <NumberInSeriesField numberInSeries={numberInSeries} hasError={false} onChange={onNumberInSeriesChange}/>
                <WordCountField wordCount={wordCount} hasError={false} onChange={onWordCountChange}/>
                <Button type="submit" variation="primary">
                    Create Book
                </Button>

            </Grid>
        </Card>
    )
}
