import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator} from "@aws-amplify/ui-react";
import AddBook from "./components/AddBook/AddBook";
import BookClubSuggestions from "./components/Suggestions/Suggestions/BookClubSuggestions";
import BookSelection from "./components/MyBooks/BookSelection/BookSelection";
import Events from "./components/Events/Events";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SiteLayout from "./components/Layout/SiteLayout";
import {
    addUserBook,
    deleteUserBookById,
    fetchUserBooks,
    getUserBookById,
    updateUserBook
} from "./services/userBookLoader";
import {addSuggestionBook, fetchSuggestionBooks} from "./services/suggestionBookLoader";
import UserBookDetails from "./components/MyBooks/UserBookDetails/UserBookDetails";
import MyBooksLayout from "./components/MyBooks/MyBooksLayout";
import Ratings from "./components/MyBooks/Ratings/Ratings";
import {createBookRatingsId, editBookRatingsId} from "./services/ratingsLoader";
import SuggestionsLayout from "./components/Suggestions/SuggestionsLayout";


export function App() {

    const router = createBrowserRouter([
        {
            path: "/*",
            element: <SiteLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "my-books/*",
                    element: <MyBooksLayout/>,
                    children: [
                        {
                            path: "",
                            loader: fetchUserBooks,
                            element: <BookSelection/>,
                        },
                        {
                            path: "add",
                            element: <AddBook/>,
                            action: addUserBook
                        },
                        {
                            path: ":id",
                            loader: getUserBookById,
                            element: <UserBookDetails/>,
                            action: updateUserBook
                        },
                        {
                            path: ":id/destroy",
                            action: deleteUserBookById,
                        },
                        {
                            path: ":id/rating/edit",
                            action: editBookRatingsId,
                            loader: getUserBookById,
                            element: <Ratings/>,
                        },
                        {
                            path: ":id/rating/new",
                            loader: getUserBookById,
                            action: createBookRatingsId
                            ,element: <Ratings/>,
                        },
                        {
                            path: ":bookId/rating/destroy",
                        },

                    ]
                },
                {
                    path: "suggestions/*",
                    element: <SuggestionsLayout/>,
                    children: [
                        {
                            path: "",
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
