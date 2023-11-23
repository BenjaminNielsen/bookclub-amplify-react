import React, {useEffect, useState} from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    View, withAuthenticator, WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions/BookClubSuggestions";
import MyBooks from "./components/MyBooks/MyBooks";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {SuggestionBooks, UserBooks} from "./types/API";
import {listSuggestionBooks, listUserBooks} from "./graphql/queries";
import {generateClient} from 'aws-amplify/api';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";

export function App({signOut, user}: WithAuthenticatorProps) {
    const API = generateClient({authMode: 'userPool'})
    const [userBooks, setUserBooks] = useState<Array<UserBooks>>(() => [])
    const [suggestionBooks, setSuggestionBooks] = useState<Array<SuggestionBooks>>(() => [])


    useEffect(() => {
        updateUserBooks()
        updateSuggestionBooks()
    }, []);

    function updateUserBooks() {
        fetchUserBooks().then((booksFromAPI: UserBooks[]) => setUserBooks(booksFromAPI));
    }

    async function fetchUserBooks(): Promise<UserBooks[]> {
        const apiData = await API.graphql({query: listUserBooks});
        return apiData.data.listUserBooks.items
    }

    function updateSuggestionBooks() {
        fetchSuggestionBooks().then((booksFromAPI: SuggestionBooks[]) => setSuggestionBooks(booksFromAPI));
        updateUserBooks()
    }

    async function fetchSuggestionBooks(): Promise<SuggestionBooks[]> {
        const apiData: any = await API.graphql({query: listSuggestionBooks});
        return apiData.data.listSuggestionBooks.items;
    }


    return (
        <View className="App">
            <Header user={user} signOut={signOut}></Header>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MyBooks userBooks={userBooks} callUpdateBooks={updateUserBooks}/>}/>
                        <Route path="myBooks" element={<MyBooks userBooks={userBooks} callUpdateBooks={updateUserBooks}/>}/>
                        <Route path="suggestions" element={<BookClubSuggestions userBooks={userBooks} suggestionBooks={suggestionBooks} callUpdateBooks={updateSuggestionBooks}/>}/>
                        <Route path="addBooks" element={<AddBook/>}/>
                        <Route path="events" element={<Events/>}/>

                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </View>
    )
}

export default withAuthenticator(App);
