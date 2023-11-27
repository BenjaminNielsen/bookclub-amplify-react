import {Button, Card} from "@aws-amplify/ui-react";
import React, {useState} from "react";
import ISBN from 'isbn3';
import IsbnField from "./Fields/IsbnField";
import TitleField from "./Fields/TitleField";
import DescriptionField from "./Fields/DetailField/DescriptionField";
import AuthorField from "./Fields/DetailField/AuthorField";
import NumberInSeriesField from "./Fields/DetailField/NumberInSeriesField";
import GenreField from "./Fields/DetailField/GenreField";

import {GoogleBookInfo} from "../../types/GoogleBookInfo";
import WordCountField from "./Fields/DetailField/WordCount";
import {getBookByIsbn} from "../../services/GoogleBookAPI";
import BookCreationAlert from "./Alerts/BookCreationAlert";
import {Form} from "react-router-dom";


export default function AddBook(): React.ReactElement | null {

    const [givenIsbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [thumbnailUrl, setThumbnailUrl] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [numberInSeries, setNumberInSeries] = useState('Standalone')
    const [wordCount, setWordCount] = useState(0)
    const [hasIsbnError, setHasIsbnError] = React.useState(false);
    const [detailsVisible, setDetailsVisible] = React.useState(false);
    const [hasBookCreateError, setHasBookCreateError] = React.useState(false);

    function setPopulatedFieldsToDefault() {
        setTitle('')
        setThumbnailUrl('')
        setAuthor('')
        setDescription('')
        setNumberInSeries('Standalone')
        setGenre('')
        setWordCount(0)
        setDetailsVisible(false)
        setHasBookCreateError(false)
    }

    function setAllFieldsToDefault() {
        setIsbn('')
        setTitle('')
        setPopulatedFieldsToDefault()
    }

    async function populateFieldByIsbn(isbn: ISBN) {
        const isbnString = isbn.isIsbn13 ? isbn.isbn13 : isbn.isbn10
        if (!isbnString)
            return
        const bookInfo = await getBookByIsbn(isbnString)
        if (bookInfo === null)
            return
        populateFieldsFromGoogleBookInfo(bookInfo)
    }

    // async function populateFieldByTitle(title: string) {
    //     const bookInfo =  await getBookByTitle(title)
    //     if(bookInfo === null)
    //         return
    //     populateFieldsFromGoogleBookInfo(bookInfo)
    // }

    function populateFieldsFromGoogleBookInfo(bookInfo: GoogleBookInfo): void {
        setTitle(bookInfo.title)
        setThumbnailUrl(bookInfo.thumbnailUrl)
        setAuthor(bookInfo.authors?.join(', '))
        setDescription(bookInfo.description)
        setGenre(bookInfo.categories?.join(', '))
        setDetailsVisible(true)
    }

    function onIsbnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newIsbnValue: string = e.target.value
        setIsbn(newIsbnValue)
        const isbnResult: ISBN | null = ISBN.parse(newIsbnValue);
        isbnResult ? setHasIsbnError(false) : setHasIsbnError(true)
        if (isbnResult == null || !isbnResult.isValid) {
            setPopulatedFieldsToDefault()
            return
        }

        populateFieldByIsbn(isbnResult);
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
        setNumberInSeries(e.target.value)
    }

    function onWordCountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWordCount(Number.parseInt(e.target.value))
    }

    function onErrorDismiss() {
        setHasBookCreateError(false)
    }

    return (
        <Card variation="outlined">
            <Form method="post">
                <BookCreationAlert isVisible={hasBookCreateError} onDismiss={onErrorDismiss}/>
                <IsbnField value={givenIsbn} hasError={hasIsbnError} onChange={onIsbnChange}/>
                <TitleField value={title} hasError={false} onChange={onTitleChange}/>
                <DescriptionField value={description} hasError={false} onChange={onDescriptionChange} isVisible={detailsVisible}/>
                <AuthorField value={author} hasError={false} onChange={onAuthorChange} isVisible={detailsVisible}/>
                <GenreField value={genre} hasError={false} onChange={onGenreChange} isVisible={detailsVisible}/>
                <NumberInSeriesField value={numberInSeries} hasError={false} onChange={onNumberInSeriesChange} isVisible={detailsVisible}/>
                <WordCountField value={wordCount} hasError={false} onChange={onWordCountChange} isVisible={detailsVisible}/>
                <Button type="submit" variation="primary" isDisabled={!detailsVisible}>
                    Create Book
                </Button>
            </Form>
        </Card>
    )
}
