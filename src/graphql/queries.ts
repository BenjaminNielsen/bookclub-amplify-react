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
    thumbnailUrl
    author
    genre
    numberInSeries
    wordCount
    description
    progress
    userRating {
      overallEnjoyment
      pacing
      prose
      qualityOfDiscussion
      storytelling
      complexity
      characterDevelopment
      teaching
      depthOfKnowledge
      relevance
      notes
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
      thumbnailUrl
      author
      genre
      numberInSeries
      wordCount
      description
      progress
      dateStarted
      dateFinished
      createdAt
      updatedAt
      userBooksUserRatingId
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
export const getSuggestionBooks = /* GraphQL */ `query GetSuggestionBooks($id: ID!) {
  getSuggestionBooks(id: $id) {
    id
    isbn
    title
    thumbnailUrl
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
` as GeneratedQuery<
  APITypes.GetSuggestionBooksQueryVariables,
  APITypes.GetSuggestionBooksQuery
>;
export const listSuggestionBooks = /* GraphQL */ `query ListSuggestionBooks(
  $filter: ModelSuggestionBooksFilterInput
  $limit: Int
  $nextToken: String
) {
  listSuggestionBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isbn
      title
      thumbnailUrl
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSuggestionBooksQueryVariables,
  APITypes.ListSuggestionBooksQuery
>;
export const getBookRating = /* GraphQL */ `query GetBookRating($id: ID!) {
  getBookRating(id: $id) {
    overallEnjoyment
    pacing
    prose
    qualityOfDiscussion
    storytelling
    complexity
    characterDevelopment
    teaching
    depthOfKnowledge
    relevance
    notes
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBookRatingQueryVariables,
  APITypes.GetBookRatingQuery
>;
export const listBookRatings = /* GraphQL */ `query ListBookRatings(
  $filter: ModelBookRatingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      overallEnjoyment
      pacing
      prose
      qualityOfDiscussion
      storytelling
      complexity
      characterDevelopment
      teaching
      depthOfKnowledge
      relevance
      notes
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookRatingsQueryVariables,
  APITypes.ListBookRatingsQuery
>;
