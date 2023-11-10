import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface NumberInSeriesFieldProps {
    numberInSeries: string;
    hasError: boolean;
    onChange: any;
}
export default function NumberInSeriesField({numberInSeries, hasError, onChange}: NumberInSeriesFieldProps){

    return (
        <TextField
            name="numberInSeries"
            placeholder="Book NumberInSeries"
            label="Book NumberInSeries"
            variation="quiet"
            hasError={hasError}
            errorMessage="invalid"
            value={numberInSeries}
            onChange={onChange}
        />
    )
}