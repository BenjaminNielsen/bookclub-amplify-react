import React from "react";
import {Button, Heading} from "@aws-amplify/ui-react";
import { AuthUser } from 'aws-amplify/auth';

interface HeaderProps {
    user: AuthUser | undefined
    signOut: any
}
export default function Header({user, signOut}:HeaderProps): React.ReactElement | null{
    return (
        <span>
            <Heading level={1}>
                My Books App {user?.username.substring(0,5)}
                <Button onClick={signOut}>Sign out</Button>
            </Heading>

        </span>
    )
}