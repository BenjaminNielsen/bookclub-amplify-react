import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Flex,
    Heading, TabItem, Tabs,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listBooks } from "./graphql/queries";
import {
    createBook as createBookMutation,
    deleteBook as deleteBookMutation,
} from "./graphql/mutations";
import AddBook from "./components/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions";

const App = ({ signOut }) => {


    return (
        <View className="App">
            <Heading level={1}>My Books App</Heading>
            <Tabs
                justifyContent="flex-start">
                <TabItem title="My Books"></TabItem>
                <TabItem title="Book Club Ideas">
                    <Heading level={2}>Current Books</Heading>
                    <BookClubSuggestions></BookClubSuggestions>
                </TabItem>
                <TabItem title="Add a Book">
                    <AddBook/>
                </TabItem>
            </Tabs>

            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
};

export default withAuthenticator(App);