import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Authenticator,
    Button,
    Heading, TabItem, Tabs,
    View,
} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions";

class App extends React.Component {
    render() {
        return (
            <Authenticator>
                {({ signOut, user }) => (
                    <View className="App">
                        <Heading level={1}>My Books App {user?.username}</Heading>
                        <Button onClick={signOut}>Sign out</Button>
                        <Tabs
                            justifyContent="flex-start">
                            <TabItem title="My Books"></TabItem>
                            <TabItem title="Book Club Ideas">
                                <Heading level={2}>Current Book Suggestions</Heading>
                                <BookClubSuggestions></BookClubSuggestions>
                            </TabItem>
                            <TabItem title="Add a Book">
                                <AddBook/>
                            </TabItem>
                        </Tabs>
                    </View>
                )}
            </Authenticator>
        );
    }
}

export default App;