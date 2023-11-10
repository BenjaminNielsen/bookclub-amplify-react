import {TextField} from "@aws-amplify/ui-react";
import React from "react";

interface GenresFieldProps {
    genres: string;
    hasError: boolean;
    onChange: any;
}
export default function GenresField({genres, hasError, onChange}: GenresFieldProps){

    return (
        <TextField
            name="genre"
            placeholder="Book Genre(s)"
            label="Book Genre(s)"
            variation="quiet"
            hasError={hasError}
            value={genres}
            onChange={onChange}
        />
    )
}