import React from "react";
import {Button, Heading} from "@aws-amplify/ui-react";

interface HeaderProps {
    user: any
    signOut: any
}
export default function Header({user, signOut}:HeaderProps): React.ReactElement | null{
    return (
        <div>
            <Heading level={1}>My Books App {user?.username}</Heading>
            <Button onClick={signOut}>Sign out</Button>
        </div>
    )
}