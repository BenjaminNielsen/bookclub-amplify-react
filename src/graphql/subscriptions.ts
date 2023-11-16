/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserBooks = /* GraphQL */ `subscription OnCreateUserBooks(
  $filter: ModelSubscriptionUserBooksFilterInput
  $owner: String
) {
  onCreateUserBooks(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserBooksSubscriptionVariables,
  APITypes.OnCreateUserBooksSubscription
>;
export const onUpdateUserBooks = /* GraphQL */ `subscription OnUpdateUserBooks(
  $filter: ModelSubscriptionUserBooksFilterInput
  $owner: String
) {
  onUpdateUserBooks(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserBooksSubscriptionVariables,
  APITypes.OnUpdateUserBooksSubscription
>;
export const onDeleteUserBooks = /* GraphQL */ `subscription OnDeleteUserBooks(
  $filter: ModelSubscriptionUserBooksFilterInput
  $owner: String
) {
  onDeleteUserBooks(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserBooksSubscriptionVariables,
  APITypes.OnDeleteUserBooksSubscription
>;
export const onCreateSuggestionBooks = /* GraphQL */ `subscription OnCreateSuggestionBooks(
  $filter: ModelSubscriptionSuggestionBooksFilterInput
) {
  onCreateSuggestionBooks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSuggestionBooksSubscriptionVariables,
  APITypes.OnCreateSuggestionBooksSubscription
>;
export const onUpdateSuggestionBooks = /* GraphQL */ `subscription OnUpdateSuggestionBooks(
  $filter: ModelSubscriptionSuggestionBooksFilterInput
) {
  onUpdateSuggestionBooks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSuggestionBooksSubscriptionVariables,
  APITypes.OnUpdateSuggestionBooksSubscription
>;
export const onDeleteSuggestionBooks = /* GraphQL */ `subscription OnDeleteSuggestionBooks(
  $filter: ModelSubscriptionSuggestionBooksFilterInput
) {
  onDeleteSuggestionBooks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSuggestionBooksSubscriptionVariables,
  APITypes.OnDeleteSuggestionBooksSubscription
>;
