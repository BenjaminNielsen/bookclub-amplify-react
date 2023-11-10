import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface TitleFieldProps {
    title: string;
    hasError: boolean;
    onChange: any;
}
export default function TitleField({title, hasError, onChange}: TitleFieldProps){

    return (
        <TextField
            name="title"
            placeholder="Book Title"
            label="Book Title"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid"
            value={title}
            onChange={onChange}
            required
        />
    )
}