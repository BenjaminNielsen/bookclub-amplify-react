import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface AuthorsFieldProps {
    authors: string;
    hasError: boolean;
    onChange: any;
}
export default function AuthorsField({authors, hasError, onChange}: AuthorsFieldProps){

    return (
        <TextField
            name="author"
            placeholder="Book Author(s)"
            label="Book Author(s)"
            variation="quiet"
            hasError={hasError}
            value={authors}
            onChange={onChange}
        />
    )
}