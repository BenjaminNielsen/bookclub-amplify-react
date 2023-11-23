import React from "react";
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

export function App({signOut, user}: WithAuthenticatorProps) {
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
                    <Route path="/myBooks" element={<MyBooks/>}/>
                    <Route path="/suggestions" element={<BookClubSuggestions/>}/>
                    <Route path="/addBooks" element={<AddBook/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/" element={<MyBooks/>}/>
                </Routes>
            </Router>
        </View>
    )
}

export default withAuthenticator(App);
