import {Button, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {listBooks} from "../graphql/queries";
import {deleteBook as deleteBookMutation} from "../graphql/mutations";

import {CompactTable} from '@table-library/react-table-library/compact';
import {useTheme} from '@table-library/react-table-library/theme';
import {getTheme} from '@table-library/react-table-library/baseline';

import {Book} from "../types/Book";
import {BsFillTrashFill} from "react-icons/bs";
import {IconContext} from "react-icons";

export default function BookClubSuggestions() {

    const [books, setBooks] = useState(() => [])
    const theme = useTheme(getTheme());

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const apiData: any = await API.graphql({query: listBooks});
        const booksFromAPI = apiData.data.listBooks.items;
        setBooks(booksFromAPI);
    }

    async function deleteBook(id: string) {
        const newBooks = books.filter((book: Book) => book.id !== id);
        setBooks(newBooks);
        await API.graphql({
            query: deleteBookMutation,
            variables: {input: {id}},
        });
    }

    // const sort = useSort(
    //     data,
    //     {
    //         onChange: onSortChange,
    //     },
    //     {
    //         sortFns: {
    //             TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
    //             DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
    //             TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
    //             COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
    //             TASKS: (array) =>
    //                 array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
    //         },
    //     }
    // );

    // function onSortChange(action, state) {
    //     console.log(action, state);
    // }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: Book) => book.title, resize: true},
        {label: 'Author', renderCell: (book: Book) => book.author, resize: true},
        {label: 'Genre', renderCell: (book: Book) => book.genre, resize: true},
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
        <View>
            <CompactTable columns={COLUMNS} data={{nodes: books}} theme={theme}/>
        </View>
    )
}
