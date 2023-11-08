import {Button, Flex, Text, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {listBooks} from "../graphql/queries";
import {deleteBook as deleteBookMutation} from "../graphql/mutations";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {Book} from "../types/Book";

export default function BookClubSuggestions() {

    const [books, setBooks] = useState([]);
    //const table = useReactTable(options)

    const defaultTestData = [ {
        isbn:"1234567890",
        title: "test1",
        description: "test description",
        author: "test author",
        numberInSeries: "1",
        wordCount: 123000,
    },
        {
            isbn:"1234567891",
            title: "test2",
            description: "test description",
            author: "test author",
            numberInSeries: "2",
            wordCount: 123002,
        },
        {
            isbn:"1234567893",
            title: "test3",
            description: "test description",
            author: "test author",
            numberInSeries: "3",
            wordCount: 123003,
        },
        {
            isbn:"1234567894",
            title: "test4",
            description: "test description",
            author: "test author",
            numberInSeries: "4",
            wordCount: 123004,
        }]


    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const apiData: any = await API.graphql({ query: listBooks });
        const booksFromAPI = apiData.data.listBooks.items;
        setBooks(booksFromAPI);
    }

    async function deleteBook(id: string) {
        const newBooks = books.filter((book:Book) => book.id !== id);
        setBooks(newBooks);
        await API.graphql({
            query: deleteBookMutation,
            variables: { input: { id } },
        });
    }



    return (
        <View>

        </View>
    )
}
