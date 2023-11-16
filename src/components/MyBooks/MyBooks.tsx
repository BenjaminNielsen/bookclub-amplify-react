import {Button, Heading, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import {generateClient} from 'aws-amplify/api';
import {createUserBooks, deleteUserBooks} from "../../graphql/mutations";
import {Book} from "../../types/Book";
import {IconContext} from "react-icons";
import {BsFillTrashFill} from "react-icons/bs";
import {CompactTable} from "@table-library/react-table-library/compact";
import {listUserBooks} from "../../graphql/queries";
import {UserBook} from "../../types/UserBooks";
import EditUserBookDetails from "../EditUserBookDetails/EditUserBookDetails";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';

export default function MyBooks(): React.ReactElement | null {

    const [books, setBooks] = useState<Array<UserBook>>(() => [])
    const [selectedBook, setSelectedBook] = useState<UserBook | null>(null)
    const API = generateClient({authMode: 'userPool'})
    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);
    const data: { nodes: Array<UserBook> } = {nodes:books}

    const select = useRowSelect(data, {
        onChange: onSelectChange,
    });

    function onSelectChange(action: any, state: any) {
        if(state.id === null)
            return
        console.log(action, state);
        console.log("Finding book with id: %o", state.id)
        const book = books.find((book) => book.id === state.id)
        if (book === undefined) {
            console.error("Error, could not find book from table selection")
            setSelectedBook(null)
            return
        }
        setSelectedBook(book)
    }

    useEffect(() => {
        fetchBooks();
    },[]);

    async function fetchBooks() {
        const apiData: any = await API.graphql({query: listUserBooks});
        console.log(apiData)
        const booksFromAPI = apiData.data.listUserBooks.items;
        setBooks(booksFromAPI);
    }

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

    async function deleteBook(id: string | null) {
        if (id == null) {
            console.error("null passed into onDeleteBook")
            return
        }
        const newBooks: UserBook[] = books.filter((book: UserBook) => book.id !== id);
        setBooks(newBooks)
        await API.graphql({
            query: deleteUserBooks,
            variables: {input: {id}},
        });
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: UserBook) => book.title, resize: true},
        {label: 'Word Count', renderCell: (book: UserBook) => book.wordCount, resize: true},
        {label: 'Start Date', renderCell: (book: UserBook) => book.dateStarted},
        {label: 'End Date', renderCell: (book: UserBook) => book.dateFinished},
        {
            label: 'Delete', renderCell: (book: Book) => {
                return (
                    <IconContext.Provider value={{color: "red"}}>
                        <div onClick={() => deleteBook(book.id ?? null)}>
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
                <Heading level={2}>My Books</Heading>
                <CompactTable theme={theme} columns={COLUMNS} data={data} select={select}/>
            </View>
            <Button onClick={onClick}>Add Book</Button>
            {selectedBook != null && <EditUserBookDetails userBook={selectedBook}/>}
        </div>
    )

}