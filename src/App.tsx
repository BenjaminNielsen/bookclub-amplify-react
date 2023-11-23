import React, {useEffect, useState} from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Flex,
    View, withAuthenticator, WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions/BookClubSuggestions";
import MyBooks from "./components/MyBooks/MyBooks";
import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
    Routes,
    Route,
} from 'react-router-dom';
import {UserBook} from "./types/UserBooks";
import {SuggestionBooks, UserBooks} from "./types/API";
import {listSuggestionBooks, listUserBooks} from "./graphql/queries";
import {generateClient} from 'aws-amplify/api';


export function App({signOut, user}: WithAuthenticatorProps) {
    const API = generateClient({authMode: 'userPool'})
    const [userBooks, setUserBooks] = useState<Array<UserBook>>(() => [])
    const [suggestionBooks, setSuggestionBooks] = useState<Array<SuggestionBooks>>(() => [])


    useEffect(() => {
        updateUserBooks()
        updateSuggestionBooks()
    },[]);
    function updateUserBooks(){
        fetchUserBooks().then((booksFromAPI: UserBooks[])=>setUserBooks(booksFromAPI));
    }
    async function fetchUserBooks():Promise<UserBooks[]> {
        const apiData = await API.graphql({query: listUserBooks});
        return apiData.data.listUserBooks.items
    }

    function updateSuggestionBooks(){
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
                <Flex>
                    <ReactRouterLink to="/myBooks"> My Books </ReactRouterLink>
                    <ReactRouterLink to="/suggestions"> Suggestions </ReactRouterLink>
                    <ReactRouterLink to="/addBooks"> Add Books </ReactRouterLink>
                    <ReactRouterLink to="/events"> Events </ReactRouterLink>
                </Flex>

                <Routes>
                    <Route path="/myBooks" element={<MyBooks userBooks={userBooks} callUpdateBooks={updateUserBooks}/>}/>
                    <Route path="/suggestions" element={<BookClubSuggestions userBooks={userBooks} suggestionBooks={suggestionBooks} callUpdateBooks={updateSuggestionBooks}/>}/>
                    <Route path="/addBooks" element={<AddBook/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/" element={<MyBooks userBooks={userBooks} callUpdateBooks={updateUserBooks}/>}/>
                </Routes>
            </Router>
        </View>
    )
}

export default withAuthenticator(App);
