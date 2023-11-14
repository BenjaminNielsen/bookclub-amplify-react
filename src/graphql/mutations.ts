/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserBooks = /* GraphQL */ `mutation CreateUserBooks(
  $input: CreateUserBooksInput!
  $condition: ModelUserBooksConditionInput
) {
  createUserBooks(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    wordCount
    description
    rating
    progress
    dateStarted
    dateFinished
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserBooksMutationVariables,
  APITypes.CreateUserBooksMutation
>;
export const updateUserBooks = /* GraphQL */ `mutation UpdateUserBooks(
  $input: UpdateUserBooksInput!
  $condition: ModelUserBooksConditionInput
) {
  updateUserBooks(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    wordCount
    description
    rating
    progress
    dateStarted
    dateFinished
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserBooksMutationVariables,
  APITypes.UpdateUserBooksMutation
>;
export const deleteUserBooks = /* GraphQL */ `mutation DeleteUserBooks(
  $input: DeleteUserBooksInput!
  $condition: ModelUserBooksConditionInput
) {
  deleteUserBooks(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    wordCount
    description
    rating
    progress
    dateStarted
    dateFinished
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserBooksMutationVariables,
  APITypes.DeleteUserBooksMutation
>;
export const createBook = /* GraphQL */ `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    wordCount
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBookMutationVariables,
  APITypes.CreateBookMutation
>;
export const updateBook = /* GraphQL */ `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    wordCount
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBookMutationVariables,
  APITypes.UpdateBookMutation
>;
export const deleteBook = /* GraphQL */ `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    wordCount
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookMutationVariables,
  APITypes.DeleteBookMutation
>;
