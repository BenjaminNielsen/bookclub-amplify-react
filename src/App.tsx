import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Tabs,
    View, withAuthenticator, WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions/BookClubSuggestions";
import MyBooks from "./components/MyBooks/MyBooks";
import Header from "./components/Header/Header";


export function App({signOut, user}: WithAuthenticatorProps) {
    return (
        <View className="App">
            <Header user={user} signOut={signOut}></Header>
            <Tabs justifyContent="center" defaultValue={'1'}
                  items={[
                      {label: 'My Books', value: '1', content: <MyBooks/>},
                      {label: 'Book Club Ideas', value: '2', content: <BookClubSuggestions/>},
                      {label: 'Add Book', value: '3', content: <AddBook/>},
                  ]}
                  isLazy={true}
            />
        </View>
    )
}

export default withAuthenticator(App);
