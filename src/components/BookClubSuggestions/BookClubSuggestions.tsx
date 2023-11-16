import {Heading, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import { generateClient } from 'aws-amplify/api';
import {listSuggestionBooks} from "../../graphql/queries";
import {deleteSuggestionBooks} from "../../graphql/mutations";

import {CompactTable} from '@table-library/react-table-library/compact';
import {useTheme} from '@table-library/react-table-library/theme';
import {getTheme} from '@table-library/react-table-library/baseline';

import {Book} from "../../types/Book";
import {BsFillTrashFill} from "react-icons/bs";
import {IconContext} from "react-icons";
import {BiSolidBookAdd} from "react-icons/bi";

export default function BookClubSuggestions(): React.ReactElement | null {

    const API = generateClient({authMode: 'userPool'});
    const [books, setBooks] = useState(() => [])
    const theme = useTheme([
        getTheme(),
        {
            Table: `
        --data-table-library_grid-template-columns:  44px repeat(5, minmax(0, 1fr));
      `,
        },
    ]);
    useEffect(() => {
        fetchBooks();
    });

    async function fetchBooks() {
        const apiData: any = await API.graphql({query: listSuggestionBooks});
        const booksFromAPI = apiData.data.listSuggestionBooks.items;
        setBooks(booksFromAPI);
    }

    async function onDeleteBook(id: string) {
        const newBooks = books.filter((book: Book) => book.id !== id);
        setBooks(newBooks);
        await API.graphql({
            query: deleteSuggestionBooks,
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

    function onAddToMyBooks(book: Book): void {
        console.log("adding the folling book to MyBooks: %o", book)
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: Book) => book.title, resize: true},
        {label: 'Author(s)', renderCell: (book: Book) => book.author?.join(', '), resize: true},
        {label: 'Genre(s)', renderCell: (book: Book) => book.genre?.join(', '), resize: true},
        {label: 'Word Count', renderCell: (book: Book) => book.wordCount, resize: true},
        {
            label: 'Add to My Books', renderCell: (book: Book) => {
                return (
                    <IconContext.Provider value={{color: "green"}}>
                        <div onClick={(e) => onAddToMyBooks(book)}>
                            <BiSolidBookAdd />
                        </div>
                    </IconContext.Provider>
                )
            }
        },
        {
            label: 'Delete', renderCell: (book: Book) => {
                return (
                    <IconContext.Provider value={{color: "red"}}>
                        <div onClick={(e) => onDeleteBook(book.id)}>
                            <BsFillTrashFill/>
                        </div>
                    </IconContext.Provider>
                )
            }
        },
    ];

    return (
        <View>
            <Heading level={2}>Current Book Suggestions</Heading>
            <CompactTable columns={COLUMNS} data={{nodes: books}} theme={theme}/>
        </View>
    )
}
