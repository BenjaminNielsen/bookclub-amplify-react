import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Authenticator,
    Button,
    Heading, TabItem, Tabs,
    View,
} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions/BookClubSuggestions";
import MyBooks from "./components/MyBooks/MyBooks";

class App extends React.Component {
    render(): React.ReactElement | null {
        return (
            <Authenticator>
                {({ signOut, user }) => (
                    <View className="App">
                        <Heading level={1}>My Books App {user?.username}</Heading>
                        <Button onClick={signOut}>Sign out</Button>
                        <Tabs
                            justifyContent="flex-start">
                            <TabItem title="My Books">
                                <MyBooks/>
                            </TabItem>
                            <TabItem title="Book Club Ideas">
                                <BookClubSuggestions/>
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