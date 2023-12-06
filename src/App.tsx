import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator} from "@aws-amplify/ui-react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from "./routes/routes";


export function App() {

    const router = createBrowserRouter(routes,   {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true
        },
    });

    return <RouterProvider router={router} future={{
        v7_startTransition: true
    }}/>

}

export default withAuthenticator(App);
