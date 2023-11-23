import {Flex, Heading, View} from "@aws-amplify/ui-react";
import React, {useState} from "react";
import {CompactTable} from "@table-library/react-table-library/compact";
import {UserBook} from "../../types/UserBooks";
import EditUserBookDetails from "./EditUserBookDetails/EditUserBookDetails";
import {useRowSelect} from "@table-library/react-table-library/select";
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';
import Ratings from "./Ratings/Ratings";


interface MyBooksProps {
    userBooks: UserBook[],
    callUpdateBooks: Function
}

export default function MyBooks({userBooks, callUpdateBooks}: MyBooksProps): React.ReactElement | null {

    const [selectedBook, setSelectedBook] = useState<UserBook | null>(null)
    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);
    const data: { nodes: Array<UserBook> } = {nodes: userBooks}

    const select = useRowSelect(data, {
        onChange: onSelectChange,
    });

    function onSelectChange(action: any, state: any) {
        if (state.id === null)
            return
        setSelectedBook(userBooks.find((book) => book.id === state.id) ?? null)
    }

    async function onDeleteClick(id: string) {
        callUpdateBooks()
        setSelectedBook(null)
    }

    async function onUpdateClick() {
        callUpdateBooks()
        setSelectedBook(null)
    }

    const COLUMNS = [
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
                {selectedBook != null && <Ratings userBook={selectedBook}></Ratings>}
            </Flex>
            <Flex justifyContent="center">
                {selectedBook != null && <EditUserBookDetails userBook={selectedBook} onDeleteParent={onDeleteClick} onUpdateParent={onUpdateClick}/>}
            </Flex>
        </div>
    )

}