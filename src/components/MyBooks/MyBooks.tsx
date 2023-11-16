import {Button, Heading, TextField,  View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import { generateClient } from 'aws-amplify/api';
import {createUserBooks, deleteUserBooks} from "../../graphql/mutations";
import {Book} from "../../types/Book";
import {IconContext} from "react-icons";
import {BsFillTrashFill} from "react-icons/bs";
import {CompactTable} from "@table-library/react-table-library/compact";
import {listUserBooks} from "../../graphql/queries";
import {UserBook} from "../../types/UserBooks";
import EditUserBookDetails from "../EditUserBookDetails/EditUserBookDetails";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useTheme} from "@table-library/react-table-library/theme";
import {getTheme} from "@table-library/react-table-library/baseline";
import {Theme} from "@emotion/react";


export default function MyBooks(): React.ReactElement | null {

    const [books, setBooks] = useState<Array<UserBook>>(() => [])
    const [selectedBook, setSelectedBook] = useState<UserBook | null>(null)
    const API = generateClient({authMode: 'userPool'})

    const select = useRowSelect({nodes: books}, {
        onChange: onSelectChange,
    });

    const theme: Theme = useTheme([
        getTheme(),
        {
            Table: `
        --data-table-library_grid-template-columns:  44px repeat(5, minmax(0, 1fr));
      `,
        },
    ]);

    function onSelectChange(action: any, state: any) {
        console.log(action, state);
        console.log("Finding book with id: %o", state.id)
        const book = books.find((book) => book.id === state.id)
        if(book === undefined){
            console.error("Error, could not find book from table selection")
            setSelectedBook(null)
            return
        }
        setSelectedBook(book)
    }

    useEffect(() => {
        fetchBooks();
    }, []);

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

    async function deleteBook(id: string) {
        const newBooks = books.filter((book: UserBook) => book.id !== id);
        setBooks(newBooks);
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
                <CompactTable theme={theme} columns={COLUMNS} data={{nodes: books}} select={select}/>
            </View>
            <Button onClick={onClick}>Add Book</Button>
            {selectedBook!=null && <EditUserBookDetails userBook={selectedBook}/>}
        </div>
    )

}