import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {DetailFieldProps} from "./DetailFieldProps";

export default function AuthorsField({value, hasError, onChange, isVisible}: DetailFieldProps): React.ReactElement | null {
    if (isVisible) {
        return (
            <TextField
                name="author"
                placeholder="Book Author(s)"
                label="Book Author(s)"
                variation="quiet"
                hasError={hasError}
                value={value}
                onChange={onChange}
            />
        )
    }
    return null
}