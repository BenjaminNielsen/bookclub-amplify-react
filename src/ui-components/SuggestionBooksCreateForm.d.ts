/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SuggestionBooksCreateFormInputValues = {
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
export declare type SuggestionBooksCreateFormValidationValues = {
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
export declare type SuggestionBooksCreateFormOverridesProps = {
    SuggestionBooksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type SuggestionBooksCreateFormProps = React.PropsWithChildren<{
    overrides?: SuggestionBooksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SuggestionBooksCreateFormInputValues) => SuggestionBooksCreateFormInputValues;
    onSuccess?: (fields: SuggestionBooksCreateFormInputValues) => void;
    onError?: (fields: SuggestionBooksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuggestionBooksCreateFormInputValues) => SuggestionBooksCreateFormInputValues;
    onValidate?: SuggestionBooksCreateFormValidationValues;
} & React.CSSProperties>;
export default function SuggestionBooksCreateForm(props: SuggestionBooksCreateFormProps): React.ReactElement;
