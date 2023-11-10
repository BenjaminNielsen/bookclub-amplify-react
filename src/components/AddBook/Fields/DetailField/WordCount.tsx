import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {DetailFieldProps} from "./DetailFieldProps";

export default function WordCountField({value, hasError, onChange, isVisible}: DetailFieldProps){
    if (isVisible) {
        return (
            <TextField
                name="wordCount"
                placeholder="Book WordCount"
                label="Book WordCount"
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