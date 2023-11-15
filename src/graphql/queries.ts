/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../types/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserBooks = /* GraphQL */ `query GetUserBooks($id: ID!) {
  getUserBooks(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserBooksQueryVariables,
  APITypes.GetUserBooksQuery
>;
export const listUserBooks = /* GraphQL */ `query ListUserBooks(
  $filter: ModelUserBooksFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserBooksQueryVariables,
  APITypes.ListUserBooksQuery
>;
export const getBook = /* GraphQL */ `query GetBook($id: ID!) {
  getBook(id: $id) {
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
` as GeneratedQuery<APITypes.GetBookQueryVariables, APITypes.GetBookQuery>;
export const listBooks = /* GraphQL */ `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBooksQueryVariables, APITypes.ListBooksQuery>;
