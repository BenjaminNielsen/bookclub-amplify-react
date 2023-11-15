/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Book } from "../types/API.ts";
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
export declare type BookUpdateFormInputValues = {
    isbn?: string;
    title?: string;
    author?: string[];
    genre?: string[];
    numberInSeries?: string;
    wordCount?: number;
    description?: string;
};
export declare type BookUpdateFormValidationValues = {
    isbn?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    numberInSeries?: ValidationFunction<string>;
    wordCount?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookUpdateFormOverridesProps = {
    BookUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isbn?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    numberInSeries?: PrimitiveOverrideProps<TextFieldProps>;
    wordCount?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    book?: Book;
    onSubmit?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onSuccess?: (fields: BookUpdateFormInputValues) => void;
    onError?: (fields: BookUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onValidate?: BookUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookUpdateForm(props: BookUpdateFormProps): React.ReactElement;
