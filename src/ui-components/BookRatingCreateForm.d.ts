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
export declare type BookRatingCreateFormInputValues = {
    overallEnjoyment?: number;
};
export declare type BookRatingCreateFormValidationValues = {
    overallEnjoyment?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookRatingCreateFormOverridesProps = {
    BookRatingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    overallEnjoyment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookRatingCreateFormProps = React.PropsWithChildren<{
    overrides?: BookRatingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookRatingCreateFormInputValues) => BookRatingCreateFormInputValues;
    onSuccess?: (fields: BookRatingCreateFormInputValues) => void;
    onError?: (fields: BookRatingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookRatingCreateFormInputValues) => BookRatingCreateFormInputValues;
    onValidate?: BookRatingCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookRatingCreateForm(props: BookRatingCreateFormProps): React.ReactElement;
