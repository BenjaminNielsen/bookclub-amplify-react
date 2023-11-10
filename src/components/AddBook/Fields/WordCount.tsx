import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface WordCountFieldProps {
    wordCount: number;
    hasError: boolean;
    onChange: any;
}
export default function WordCountField({wordCount, hasError, onChange}: WordCountFieldProps){

    return (
        <TextField
            name="wordCount"
            placeholder="Book WordCount"
            label="Book WordCount"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid"
            value={wordCount}
            onChange={onChange}
        />
    )
}