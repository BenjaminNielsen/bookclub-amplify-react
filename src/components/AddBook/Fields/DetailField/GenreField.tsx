import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {DetailFieldProps} from "./DetailFieldProps";

export default function GenresField({value, hasError, onChange, isVisible}: DetailFieldProps): React.ReactElement | null {
    if (isVisible) {
        return (
            <TextField
                name="genre"
                placeholder="Book Genre(s)"
                label="Book Genre(s)"
                variation="quiet"
                hasError={hasError}
                value={value}
                onChange={onChange}
            />
        )
    }
    return null
}