import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface IsbnFieldProps {
    isbn: string;
    hasError: boolean;
    onChange: any;
}
export default function IsbnField({isbn, hasError, onChange}: IsbnFieldProps){

    return (
        <TextField
            name="isbn"
            placeholder="ISBN"
            label="ISBN"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid ISBN"
            value={isbn}
            onChange={onChange}
        />
    )
}