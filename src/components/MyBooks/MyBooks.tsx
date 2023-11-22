import {Flex, Heading, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import {generateClient} from 'aws-amplify/api';
import {CompactTable} from "@table-library/react-table-library/compact";
import {listUserBooks} from "../../graphql/queries";
import {UserBook} from "../../types/UserBooks";
import EditUserBookDetails from "../EditUserBookDetails/EditUserBookDetails";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';
import {UserBooks} from "../../types/API";

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
        setSelectedBook(books.find((book) => book.id === state.id)??null)
    }

    useEffect(() => {
        fetchBooks().then((booksFromAPI: UserBooks[])=>setBooks(booksFromAPI));
    },[]);

    async function fetchBooks():Promise<UserBooks[]> {
        const apiData = await API.graphql({query: listUserBooks});
        console.log("fetchBooks() called and returned: %o", apiData)
        return apiData.data.listUserBooks.items
    }

    async function onDeleteClick(id: string) {
        const updatedBooks: UserBooks[] = await fetchBooks()
        setBooks(updatedBooks)
        setSelectedBook(null)
    }

    async function onUpdateClick(){
        const updatedBooks: UserBooks[] = await fetchBooks()
        setBooks(updatedBooks)
        setSelectedBook(null)
    }

    const COLUMNS= [
        {label: 'Title', renderCell: (book: UserBook) => book.title, resize: true},
        {label: 'Word Count', renderCell: (book: UserBook) => book.wordCount, resize: true},
        {label: 'Start Date', renderCell: (book: UserBook) => book.dateStarted},
        {label: 'End Date', renderCell: (book: UserBook) => book.dateFinished},
    ];

    return (
        <div>
            <View>
                <Heading level={2}>My Books</Heading>
                <CompactTable theme={theme} columns={COLUMNS} data={data} select={select}/>
            </View>
            <Flex justifyContent="center">
                {selectedBook != null && <EditUserBookDetails userBook={selectedBook} onDeleteParent={onDeleteClick} onUpdateParent={onUpdateClick}/>}
            </Flex>
        </div>
    )

}