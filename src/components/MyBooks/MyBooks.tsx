import {Button, Card, Heading, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import UserBooksCreateForm, {UserBooksCreateFormInputValues} from "../../ui-components/UserBooksCreateForm";
import { generateClient } from 'aws-amplify/api';
import {createUserBooks, deleteUserBooks} from "../../graphql/mutations";
import {listUserBooks} from "../../graphql/queries";
import {Book} from "../../types/Book";
import {IconContext} from "react-icons";
import {BsFillTrashFill} from "react-icons/bs";
import {CompactTable} from "@table-library/react-table-library/compact";
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/auth/src/types/Auth";



export default function MyBooks(): React.ReactElement | null {

    const [books, setBooks] = useState(() => [])
    const API = generateClient()

    // useEffect(() => {
    //     fetchBooks();
    // }, []);

    // async function fetchBooks() {
    //
    //     const apiData: any = await API.graphql({query: listUserBooks});
    //     console.log(apiData)
    //     const booksFromAPI = apiData.data.listUserBooks.items;
    //     setBooks(booksFromAPI);
    // }

    async function onClick() {
        const newUserBooks = await API.graphql({
            query: createUserBooks,
            variables: {
                input: {
                    "isbn": "Lorem ipsum dolor sit amet",
                    "title": "Lorem ipsum dolor sit amet",
                    "author": ['Ben'],
                    "genre": ['Genre'],
                    "numberInSeries": "Lorem ipsum dolor sit amet",
                    "wordCount": 1020,
                    "description": "Lorem ipsum dolor sit amet",
                    "rating": 1020,
                    "progress": 1020,
                    "dateStarted": "1970-01-01Z",
                    "dateFinished": "1970-01-01Z"
                }
            },
        });
    }

    async function deleteBook(id: string) {
        const newBooks = books.filter((book: Book) => book.id !== id);
        setBooks(newBooks);
        await API.graphql({
            query: deleteUserBooks,
            variables: {input: {id}},
        });
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: Book) => book.title, resize: true},
        {label: 'Author(s)', renderCell: (book: Book) => book.author?.join(', '), resize: true},
        {label: 'Genre(s)', renderCell: (book: Book) => book.genre?.join(', '), resize: true},
        {label: 'Word Count', renderCell: (book: Book) => book.wordCount, resize: true},
        {
            label: 'Delete', renderCell: (book: Book) => {
                return (
                    <IconContext.Provider value={{color: "red"}}>
                        <div onClick={(e) => deleteBook(book.id)}>
                            <BsFillTrashFill/>
                        </div>
                    </IconContext.Provider>
                )
            }
        },
    ];

    return (
        <div>
            <View>
                <Heading level={2}>Current Book Suggestions</Heading>
                <CompactTable columns={COLUMNS} data={{nodes: books}}/>
            </View>
            <Button onClick={onClick}>Add Book</Button>
        </div>
    )

}