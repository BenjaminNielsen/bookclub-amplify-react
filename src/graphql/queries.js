/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      isbn
      title
      author
      genre
      numberInSeries
      wordCount
      description
      dateAdded
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
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
        dateAdded
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
