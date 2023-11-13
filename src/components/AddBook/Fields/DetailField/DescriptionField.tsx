import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {DetailFieldProps} from "./DetailFieldProps";

export default function DescriptionField({value, hasError, onChange, isVisible}: DetailFieldProps):React.ReactElement | null {
    if (isVisible) {
        return (
            <TextField
                name="description"
                placeholder="Book Description"
                label="Book Description"
                variation="quiet"
                hasError={hasError}
                errorMessage="invalid"
                value={value}
                onChange={onChange}
            />
        )
    }
    return null
}