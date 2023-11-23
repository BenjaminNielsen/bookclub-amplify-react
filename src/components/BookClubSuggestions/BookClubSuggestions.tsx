import React, {useEffect, useState} from "react";
import {generateClient} from 'aws-amplify/api';
import {listSuggestionBooks} from "../../graphql/queries";
import {createUserBooks, deleteSuggestionBooks} from "../../graphql/mutations";

import {CompactTable} from '@table-library/react-table-library/compact';
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';

import {Book} from "../../types/Book";
import {BsFillTrashFill} from "react-icons/bs";
import {IconContext} from "react-icons";
import {BiSolidBookAdd} from "react-icons/bi";
import {UserBooksCreateFormInputValues} from "../../ui-components/UserBooksCreateForm";
import suggestionBookToUserBook from "../../services/bookConverters";
import {SuggestionBooks} from "../../types/API";

export default function BookClubSuggestions(): React.ReactElement | null {

    const API = generateClient({authMode: 'userPool'});
    const [books, setBooks] = useState<Array<SuggestionBooks>>(() => [])
    DEFAULT_OPTIONS.highlightOnHover = true;
    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);

    useEffect(() => {
        fetchBooks()
            .then((booksFromAPI: SuggestionBooks[]) => setBooks(booksFromAPI));
    }, []);

    async function fetchBooks(): Promise<Array<SuggestionBooks>> {
        const apiData: any = await API.graphql({query: listSuggestionBooks});
        return apiData.data.listSuggestionBooks.items;
    }

    async function onDeleteBook(id: string | null) {
        if (id == null) {
            console.error("null passed into onDeleteBook")
            return
        }
        const newBooks = books.filter((book: SuggestionBooks) => book.id !== id);
        setBooks(newBooks);
        await API.graphql({
            query: deleteSuggestionBooks,
            variables: {input: {id}},
        });
    }

    async function onAddToMyBooks(book: Book): Promise<void> {
        console.log("adding the following book to MyBooks: %o", book)
        //turn Book into UserBooks
        const newUserBook: UserBooksCreateFormInputValues = suggestionBookToUserBook(book)
        //call add in for user books api
        await API.graphql({
            query: createUserBooks,
            variables: {
                input: newUserBook
            },
        });
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: Book) => book.title, resize: true},
        {label: 'Author(s)', renderCell: (book: Book) => book.author?.join(', '), resize: true},
        {label: 'Genre(s)', renderCell: (book: Book) => book.genre?.join(', '), resize: true},
        {label: 'Word Count', renderCell: (book: Book) => book.wordCount, resize: true},
        {
            label: 'Add to My Books', renderCell: (book: Book) => {
                return (
                    <Button gap="0.1rem" size="small" onClick={() => onAddToMyBooks(book)}>
                        <IconContext.Provider value={{color: "green"}}>
                            <BiSolidBookAdd/>
                        </IconContext.Provider>
                    </Button>

                )
            }
        },
        {
            label: 'Delete', renderCell: (book: Book) => {
                return (
                    <Button gap="0.1rem" size="small" onClick={() => onDeleteBook(book.id ?? null)}>
                        <IconContext.Provider value={{color: "red"}}>
                            <BsFillTrashFill/>
                        </IconContext.Provider>
                    </Button>
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
