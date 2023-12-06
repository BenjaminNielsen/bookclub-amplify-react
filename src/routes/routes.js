import SiteLayout from "../components/Layout/SiteLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyBooksLayout from "../components/MyBooks/MyBooksLayout";
import {
    addUserBook,
    deleteUserBookById,
    fetchUserBooks,
    getUserBookById,
    updateUserBook
} from "../services/userBookLoader";
import BookSelection from "../components/MyBooks/BookSelection/BookSelection";
import AddBook from "../components/AddBook/AddBook";
import UserBookDetails from "../components/MyBooks/UserBookDetails/UserBookDetails";
import {createBookRatingsId, editBookRatingsId} from "../services/ratingsLoader";
import Ratings from "../components/MyBooks/Ratings/Ratings";
import SuggestionsLayout from "../components/Suggestions/SuggestionsLayout";
import {
    addSuggestionBook,
    fetchSuggestionBooks,
    getSuggestionBookById,
    updateSuggestionBook
} from "../services/suggestionBookLoader";
import BookClubSuggestions from "../components/Suggestions/Suggestions/BookClubSuggestions";
import EditSuggestion from "../components/Suggestions/Suggestions/EditSuggestion/EditSuggestion";
import Events from "../components/Events/Events";
import React from "react";

const routes =[
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
                    },
                    {
                        path: ":id/edit",
                        element: <EditSuggestion/>,
                        loader: getSuggestionBookById,
                        action: updateSuggestionBook
                    }
                ]

            },
            {
                path: "events",
                element: <Events/>
            }
        ]
    },
]
export default routes