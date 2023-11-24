import {TextField} from "@aws-amplify/ui-react";
import React from "react";
import {FieldProps} from "./FieldProps";

export default function TitleField({value, hasError, onChange}: FieldProps): React.ReactElement | null {

    return (
        <TextField
            name="title"
            placeholder="Book Title"
            label="Book Title"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid"
            value={value}
            onChange={onChange}
            required
        />
    )
}