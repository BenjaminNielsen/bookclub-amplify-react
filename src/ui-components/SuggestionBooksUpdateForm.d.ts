/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SuggestionBooks } from "../types/API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SuggestionBooksUpdateFormInputValues = {
    isbn?: string;
    title?: string;
    thumbnailUrl?: string;
    author?: string[];
    genre?: string[];
    numberInSeries?: string;
    rating?: number;
    wordCount?: number;
    description?: string;
    likedBy?: string[];
    dislikedBy?: string[];
};
export declare type SuggestionBooksUpdateFormValidationValues = {
    isbn?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    thumbnailUrl?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    numberInSeries?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    wordCount?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    likedBy?: ValidationFunction<string>;
    dislikedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuggestionBooksUpdateFormOverridesProps = {
    SuggestionBooksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isbn?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailUrl?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    numberInSeries?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    wordCount?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    likedBy?: PrimitiveOverrideProps<TextFieldProps>;
    dislikedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SuggestionBooksUpdateFormProps = React.PropsWithChildren<{
    overrides?: SuggestionBooksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    suggestionBooks?: SuggestionBooks;
    onSubmit?: (fields: SuggestionBooksUpdateFormInputValues) => SuggestionBooksUpdateFormInputValues;
    onSuccess?: (fields: SuggestionBooksUpdateFormInputValues) => void;
    onError?: (fields: SuggestionBooksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuggestionBooksUpdateFormInputValues) => SuggestionBooksUpdateFormInputValues;
    onValidate?: SuggestionBooksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SuggestionBooksUpdateForm(props: SuggestionBooksUpdateFormProps): React.ReactElement;
