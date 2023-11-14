import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {DetailFieldProps} from "./DetailFieldProps";

export default function NumberInSeriesField({value, hasError, onChange, isVisible}: DetailFieldProps): React.ReactElement | null {
    if (isVisible) {
        return (
            <TextField
                name="numberInSeries"
                placeholder="Book NumberInSeries"
                label="Book NumberInSeries"
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