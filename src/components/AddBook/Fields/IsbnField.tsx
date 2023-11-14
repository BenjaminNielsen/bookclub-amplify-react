import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {FieldProps} from "./FieldProps";

export default function IsbnField({value, hasError, onChange}: FieldProps): React.ReactElement | null {
    return (
        <TextField
            name="isbn"
            placeholder="ISBN"
            label="ISBN"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid ISBN"
            value={value}
            onChange={onChange}
        />
    )
}