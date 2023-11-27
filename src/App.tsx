import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator, WithAuthenticatorProps,} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/Suggestions/Suggestions/BookClubSuggestions";
import BookSelection from "./components/MyBooks/BookSelection/BookSelection";
import Events from "./components/Events/Events";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";
import {addUserBook, deleteUserBookById, fetchUserBooks, getUserBookById} from "./services/userBookLoader";
import {addSuggestionBook, fetchSuggestionBooks} from "./services/suggestionBookLoader";
import UserBookDetails from "./components/MyBooks/UserBookDetails/UserBookDetails";
import MyBooksLayout from "./components/MyBooks/MyBooksLayout";
import Ratings from "./components/MyBooks/Ratings/Ratings";
import {getBookRatingsId} from "./services/ratingsLoader";
import SuggestionsLayout from "./components/Suggestions/SuggestionsLayout";


export function App({signOut, user}: WithAuthenticatorProps) {

    const router = createBrowserRouter([
        {
            path: "/*",
            element: <Layout user={user} signOut={signOut}/>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path:"my-books/*",
                    element: <MyBooksLayout/>,
                    children:[
                        {
                            path:"",
                            loader: fetchUserBooks,
                            element: <BookSelection/>,
                        },
                        {
                            path:":id",
                            loader: getUserBookById,
                            element: <UserBookDetails />,
                        },
                        {
                            path:":bookId/rating/:id",
                            loader:getBookRatingsId,
                            element: <Ratings/>
                        },
                        {
                            path: ":id/destroy",
                            action: deleteUserBookById,
                        },
                        {
                            path: "add",
                            element: <AddBook/>,
                            action: addUserBook
                        }
                    ]
                },
                {
                    path: "suggestions/*",
                    element: <SuggestionsLayout/>,
                    children: [
                        {
                            path:"",
                            loader: fetchSuggestionBooks,
                            element: <BookClubSuggestions/>
                        },
                        {
                            path: "add",
                            element: <AddBook/>,
                            action: addSuggestionBook
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
