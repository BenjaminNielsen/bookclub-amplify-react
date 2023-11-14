import {Alert} from "@aws-amplify/ui-react";
import React from "react";

interface BookCreationAlertProps {
    isVisible: boolean
    onDismiss: any
}

export default function BookCreationAlert({isVisible, onDismiss}: BookCreationAlertProps): React.ReactElement | null {
    return <> {isVisible &&
        <Alert
            variation="error"
            isDismissible={true}
            hasIcon={true}
            heading="Error Adding Book"
            onDismiss={onDismiss}
        >
            Something went wrong in adding the book
        </Alert>}
    </>
}