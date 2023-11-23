/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BookRating } from "../types/API.ts";
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
export declare type BookRatingUpdateFormInputValues = {
    overallEnjoyment?: number;
    pacing?: number;
    prose?: number;
    qualityOfDiscussion?: number;
    storytelling?: number;
    complexity?: number;
    characterDevelopment?: number;
    teaching?: number;
    depthOfKnowledge?: number;
    relevance?: number;
    notes?: string;
};
export declare type BookRatingUpdateFormValidationValues = {
    overallEnjoyment?: ValidationFunction<number>;
    pacing?: ValidationFunction<number>;
    prose?: ValidationFunction<number>;
    qualityOfDiscussion?: ValidationFunction<number>;
    storytelling?: ValidationFunction<number>;
    complexity?: ValidationFunction<number>;
    characterDevelopment?: ValidationFunction<number>;
    teaching?: ValidationFunction<number>;
    depthOfKnowledge?: ValidationFunction<number>;
    relevance?: ValidationFunction<number>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookRatingUpdateFormOverridesProps = {
    BookRatingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    overallEnjoyment?: PrimitiveOverrideProps<TextFieldProps>;
    pacing?: PrimitiveOverrideProps<TextFieldProps>;
    prose?: PrimitiveOverrideProps<TextFieldProps>;
    qualityOfDiscussion?: PrimitiveOverrideProps<TextFieldProps>;
    storytelling?: PrimitiveOverrideProps<TextFieldProps>;
    complexity?: PrimitiveOverrideProps<TextFieldProps>;
    characterDevelopment?: PrimitiveOverrideProps<TextFieldProps>;
    teaching?: PrimitiveOverrideProps<TextFieldProps>;
    depthOfKnowledge?: PrimitiveOverrideProps<TextFieldProps>;
    relevance?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookRatingUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookRatingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bookRating?: BookRating;
    onSubmit?: (fields: BookRatingUpdateFormInputValues) => BookRatingUpdateFormInputValues;
    onSuccess?: (fields: BookRatingUpdateFormInputValues) => void;
    onError?: (fields: BookRatingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookRatingUpdateFormInputValues) => BookRatingUpdateFormInputValues;
    onValidate?: BookRatingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookRatingUpdateForm(props: BookRatingUpdateFormProps): React.ReactElement;
