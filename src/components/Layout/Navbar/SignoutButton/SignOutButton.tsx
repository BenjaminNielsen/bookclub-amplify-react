import {Button} from "@aws-amplify/ui-react";
import React from "react";
import './SignOutButton.scss'

interface SignoutButtonProps {
    signOut: any
}

export const SignOutButton = ({signOut}: SignoutButtonProps) => {
    return <Button className="SignOutButton" onClick={signOut}>Sign out</Button>
}