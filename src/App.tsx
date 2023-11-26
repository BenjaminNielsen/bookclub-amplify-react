import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator, WithAuthenticatorProps,} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/BookClubSuggestions/BookClubSuggestions";
import MyBooks from "./components/MyBooks/MyBooks";
import Events from "./components/Events/Events";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";
import {fetchUserBooks, getUserBookById} from "./services/userBookLoader";
import {fetchSuggestionBooks} from "./services/suggestionBookLoader";
import EditUserBookDetails from "./components/MyBooks/EditUserBookDetails/EditUserBookDetails";


export function App({signOut, user}: WithAuthenticatorProps) {

    const router = createBrowserRouter([
        {
            path: "/*",
            element: <Layout user={user} signOut={signOut}/>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "my-books",
                    loader: fetchUserBooks,
                    element: <MyBooks/>,
                    children:[
                        {
                            path:"edit/:id",
                            loader: getUserBookById,
                            element: <EditUserBookDetails />
                        }
                    ]
                },
                {
                    path: "suggestions",
                    loader: fetchSuggestionBooks,
                    element: <BookClubSuggestions/>,
                    children: [
                        {
                            path: "add",
                            element: <AddBook/>
                        }
                    ]
                },
                {
                    path: "events",
                    element: <Events/>
                }
            ]
        },
    ]);

    return <RouterProvider router={router}/>

}

export default withAuthenticator(App);
