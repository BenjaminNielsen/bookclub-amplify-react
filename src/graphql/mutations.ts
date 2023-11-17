/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBookRating = /* GraphQL */ `mutation CreateBookRating(
  $input: CreateBookRatingInput!
  $condition: ModelBookRatingConditionInput
) {
  createBookRating(input: $input, condition: $condition) {
    overallEnjoyment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBookRatingMutationVariables,
  APITypes.CreateBookRatingMutation
>;
export const updateBookRating = /* GraphQL */ `mutation UpdateBookRating(
  $input: UpdateBookRatingInput!
  $condition: ModelBookRatingConditionInput
) {
  updateBookRating(input: $input, condition: $condition) {
    overallEnjoyment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBookRatingMutationVariables,
  APITypes.UpdateBookRatingMutation
>;
export const deleteBookRating = /* GraphQL */ `mutation DeleteBookRating(
  $input: DeleteBookRatingInput!
  $condition: ModelBookRatingConditionInput
) {
  deleteBookRating(input: $input, condition: $condition) {
    overallEnjoyment
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBookRatingMutationVariables,
  APITypes.DeleteBookRatingMutation
>;
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
    progress
    userRating {
      overallEnjoyment
      id
      createdAt
      updatedAt
      __typename
    }
    dateStarted
    dateFinished
    createdAt
    updatedAt
    userBooksUserRatingId
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
    progress
    userRating {
      overallEnjoyment
      id
      createdAt
      updatedAt
      __typename
    }
    dateStarted
    dateFinished
    createdAt
    updatedAt
    userBooksUserRatingId
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
    progress
    userRating {
      overallEnjoyment
      id
      createdAt
      updatedAt
      __typename
    }
    dateStarted
    dateFinished
    createdAt
    updatedAt
    userBooksUserRatingId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserBooksMutationVariables,
  APITypes.DeleteUserBooksMutation
>;
export const createSuggestionBooks = /* GraphQL */ `mutation CreateSuggestionBooks(
  $input: CreateSuggestionBooksInput!
  $condition: ModelSuggestionBooksConditionInput
) {
  createSuggestionBooks(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    rating
    wordCount
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSuggestionBooksMutationVariables,
  APITypes.CreateSuggestionBooksMutation
>;
export const updateSuggestionBooks = /* GraphQL */ `mutation UpdateSuggestionBooks(
  $input: UpdateSuggestionBooksInput!
  $condition: ModelSuggestionBooksConditionInput
) {
  updateSuggestionBooks(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    rating
    wordCount
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSuggestionBooksMutationVariables,
  APITypes.UpdateSuggestionBooksMutation
>;
export const deleteSuggestionBooks = /* GraphQL */ `mutation DeleteSuggestionBooks(
  $input: DeleteSuggestionBooksInput!
  $condition: ModelSuggestionBooksConditionInput
) {
  deleteSuggestionBooks(input: $input, condition: $condition) {
    id
    isbn
    title
    author
    genre
    numberInSeries
    rating
    wordCount
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSuggestionBooksMutationVariables,
  APITypes.DeleteSuggestionBooksMutation
>;
