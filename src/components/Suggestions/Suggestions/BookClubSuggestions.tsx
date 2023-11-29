import React from "react";
import {generateClient} from 'aws-amplify/api';
import {createUserBooks, deleteSuggestionBooks, updateSuggestionBooks} from "../../../graphql/mutations";

import {CompactTable} from '@table-library/react-table-library/compact';
import {useTheme} from '@table-library/react-table-library/theme';
import {DEFAULT_OPTIONS, getTheme} from '@table-library/react-table-library/material-ui';

import {BsFillTrashFill} from "react-icons/bs";
import {IconContext} from "react-icons";
import {BiSolidBookAdd} from "react-icons/bi";
import {UserBooksCreateFormInputValues} from "../../../ui-components/UserBooksCreateForm";
import suggestionBookToUserBook from "../../../services/bookConverters";
import {SuggestionBooks} from "../../../types/API";
import {Button, useAuthenticator, View} from "@aws-amplify/ui-react";
import {useLoaderData} from "react-router-dom";
import ApprovalBadge from "./ApprovalBadge";



export default function BookClubSuggestions(): React.ReactElement | null {

    const API = generateClient({authMode: 'userPool'});
    DEFAULT_OPTIONS.highlightOnHover = true;
    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);
    const suggestionBooks = useLoaderData() as SuggestionBooks[]

    const { user } = useAuthenticator();


    async function onDeleteBook(id: string | null) {
        if (id == null) {
            console.error("null passed into onDeleteBook")
            return
        }
        await API.graphql({
            query: deleteSuggestionBooks,
            variables: {input: {id}},
        });
    }

    async function onAddToMyBooks(book: SuggestionBooks): Promise<void> {
        console.log("adding the following book to BookSelection: %o", book)
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

    async function onLikeClicked(book: SuggestionBooks): Promise<void> {
        console.log("liking following book: %o", book)
        if(book.likedBy == null){
            book.likedBy = [user.userId]
        } else {
            book.likedBy?.push(user.userId)
        }
        console.log("updating likes for %o with %o", book, book.likedBy)
        //call add in for user books api
        await API.graphql({
            query: updateSuggestionBooks,
            variables: {
                input: {
                    id: book.id,
                    likedBy: Array.from(new Set(book.likedBy))
                }
            },
        });
    }

    const COLUMNS = [
        {label: 'Title', renderCell: (book: SuggestionBooks) => book.title, resize: true},
        {label: 'Author(s)', renderCell: (book: SuggestionBooks) => book.author?.join(', '), resize: true},
        {label: 'Genre(s)', renderCell: (book: SuggestionBooks) => book.genre?.join(', '), resize: true},
        {label: 'Word Count', renderCell: (book: SuggestionBooks) => book.wordCount, resize: true},
        {
            label: 'Likes', renderCell: (book: SuggestionBooks) => {
                return (
                    <View>
                        {book.likedBy?.map(likedUser => <ApprovalBadge key={likedUser} owner={likedUser??''} approved={true}></ApprovalBadge>)}
                        {book.dislikedBy?.map(dislikedUser => <ApprovalBadge key={dislikedUser}  owner={dislikedUser??''} approved={false}></ApprovalBadge>)}
                    </View>
                )
            }
        }, {
            label: 'Your Rating', renderCell: (book: SuggestionBooks) => {
                return (
                    <View>
                        <Button onClick={()=>onLikeClicked(book)}></Button>
                    </View>
                )
            }
        },
        {
            label: 'Add to My Books', renderCell: (book: SuggestionBooks) => {
                return (
                    <Button gap="0.1rem" size="small" onClick={() => onAddToMyBooks(book)}>
                        <BiSolidBookAdd/>
                    </Button>
                )
            }
        },
        {
            label: 'Delete', renderCell: (book: SuggestionBooks) => {
                return (
                    <Button gap="0.1rem" size="small" colorTheme="error" onClick={() => onDeleteBook(book.id?? null)}>
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
            <CompactTable columns={COLUMNS} data={{nodes: suggestionBooks}} theme={theme}/>
        </View>
    )
}
