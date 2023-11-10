import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface DescriptionFieldProps {
    description: string;
    hasError: boolean;
    onChange: any;
}

export default function DescriptionField({description, hasError, onChange}: DescriptionFieldProps) {

    return (
        <TextField
            name="description"
            placeholder="Book Description"
            label="Book Description"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid"
            value={description}
            onChange={onChange}
        />
    )
}