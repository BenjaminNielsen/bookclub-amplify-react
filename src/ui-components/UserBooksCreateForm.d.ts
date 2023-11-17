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
export declare type UserBooksCreateFormInputValues = {
    isbn?: string;
    title?: string;
    author?: string[];
    genre?: string[];
    numberInSeries?: string;
    wordCount?: number;
    description?: string;
    progress?: number;
    dateStarted?: string;
    dateFinished?: string;
};
export declare type UserBooksCreateFormValidationValues = {
    isbn?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
    numberInSeries?: ValidationFunction<string>;
    wordCount?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    progress?: ValidationFunction<number>;
    dateStarted?: ValidationFunction<string>;
    dateFinished?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserBooksCreateFormOverridesProps = {
    UserBooksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isbn?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<TextFieldProps>;
    numberInSeries?: PrimitiveOverrideProps<TextFieldProps>;
    wordCount?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    progress?: PrimitiveOverrideProps<TextFieldProps>;
    dateStarted?: PrimitiveOverrideProps<TextFieldProps>;
    dateFinished?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserBooksCreateFormProps = React.PropsWithChildren<{
    overrides?: UserBooksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserBooksCreateFormInputValues) => UserBooksCreateFormInputValues;
    onSuccess?: (fields: UserBooksCreateFormInputValues) => void;
    onError?: (fields: UserBooksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserBooksCreateFormInputValues) => UserBooksCreateFormInputValues;
    onValidate?: UserBooksCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserBooksCreateForm(props: UserBooksCreateFormProps): React.ReactElement;
