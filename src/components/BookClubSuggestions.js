import {Button, Flex, Text, View} from "@aws-amplify/ui-react";
import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {listBooks} from "../graphql/queries";
import {deleteBook as deleteBookMutation} from "../graphql/mutations";

export default function BookClubSuggestions() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const apiData = await API.graphql({ query: listBooks });
        const booksFromAPI = apiData.data.listBooks.items;
        setBooks(booksFromAPI);
    }

    async function deleteBook({ id }) {
        const newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
        await API.graphql({
            query: deleteBookMutation,
            variables: { input: { id } },
        });
    }

    return (
        <View>
            <View margin="3rem 0">
                {books.map((book) => (
                    <Flex
                        key={book.id || book.name}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>
                            {book.name}
                        </Text>
                        <Text as="span">{book.description}</Text>
                        <Button variation="link" onClick={() => deleteBook(book)}>
                            Delete Book
                        </Button>
                    </Flex>
                ))}
            </View>
        </View>
    )
}
