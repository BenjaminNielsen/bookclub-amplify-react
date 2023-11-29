import {Button, useAuthenticator} from "@aws-amplify/ui-react";
import React from "react";
import './SignOutButton.scss'


export const SignOutButton = () => {
    const { signOut } = useAuthenticator();

    return <Button className="SignOutButton" onClick={signOut}>Sign out</Button>
}