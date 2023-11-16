/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserBooksInput = {
  id?: string | null,
  isbn?: string | null,
  title?: string | null,
  author?: Array< string | null > | null,
  genre?: Array< string | null > | null,
  numberInSeries?: string | null,
  wordCount?: number | null,
  description?: string | null,
  rating?: number | null,
  progress?: number | null,
  dateStarted?: string | null,
  dateFinished?: string | null,
};

export type ModelUserBooksConditionInput = {
  isbn?: ModelStringInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  numberInSeries?: ModelStringInput | null,
  wordCount?: ModelIntInput | null,
  description?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  progress?: ModelIntInput | null,
  dateStarted?: ModelStringInput | null,
  dateFinished?: ModelStringInput | null,
  and?: Array< ModelUserBooksConditionInput | null > | null,
  or?: Array< ModelUserBooksConditionInput | null > | null,
  not?: ModelUserBooksConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserBooks = {
  __typename: "UserBooks",
  id: string,
  isbn?: string | null,
  title?: string | null,
  author?: Array< string | null > | null,
  genre?: Array< string | null > | null,
  numberInSeries?: string | null,
  wordCount?: number | null,
  description?: string | null,
  rating?: number | null,
  progress?: number | null,
  dateStarted?: string | null,
  dateFinished?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserBooksInput = {
  id: string,
  isbn?: string | null,
  title?: string | null,
  author?: Array< string | null > | null,
  genre?: Array< string | null > | null,
  numberInSeries?: string | null,
  wordCount?: number | null,
  description?: string | null,
  rating?: number | null,
  progress?: number | null,
  dateStarted?: string | null,
  dateFinished?: string | null,
};

export type DeleteUserBooksInput = {
  id: string,
};

export type CreateSuggestionBooksInput = {
  id?: string | null,
  isbn?: string | null,
  title?: string | null,
  author?: Array< string | null > | null,
  genre?: Array< string | null > | null,
  numberInSeries?: string | null,
  wordCount?: number | null,
  description?: string | null,
};

export type ModelSuggestionBooksConditionInput = {
  isbn?: ModelStringInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  numberInSeries?: ModelStringInput | null,
  wordCount?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSuggestionBooksConditionInput | null > | null,
  or?: Array< ModelSuggestionBooksConditionInput | null > | null,
  not?: ModelSuggestionBooksConditionInput | null,
};

export type SuggestionBooks = {
  __typename: "SuggestionBooks",
  id: string,
  isbn?: string | null,
  title?: string | null,
  author?: Array< string | null > | null,
  genre?: Array< string | null > | null,
  numberInSeries?: string | null,
  wordCount?: number | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSuggestionBooksInput = {
  id: string,
  isbn?: string | null,
  title?: string | null,
  author?: Array< string | null > | null,
  genre?: Array< string | null > | null,
  numberInSeries?: string | null,
  wordCount?: number | null,
  description?: string | null,
};

export type DeleteSuggestionBooksInput = {
  id: string,
};

export type ModelUserBooksFilterInput = {
  id?: ModelIDInput | null,
  isbn?: ModelStringInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  numberInSeries?: ModelStringInput | null,
  wordCount?: ModelIntInput | null,
  description?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  progress?: ModelIntInput | null,
  dateStarted?: ModelStringInput | null,
  dateFinished?: ModelStringInput | null,
  and?: Array< ModelUserBooksFilterInput | null > | null,
  or?: Array< ModelUserBooksFilterInput | null > | null,
  not?: ModelUserBooksFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserBooksConnection = {
  __typename: "ModelUserBooksConnection",
  items:  Array<UserBooks | null >,
  nextToken?: string | null,
};

export type ModelSuggestionBooksFilterInput = {
  id?: ModelIDInput | null,
  isbn?: ModelStringInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  genre?: ModelStringInput | null,
  numberInSeries?: ModelStringInput | null,
  wordCount?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelSuggestionBooksFilterInput | null > | null,
  or?: Array< ModelSuggestionBooksFilterInput | null > | null,
  not?: ModelSuggestionBooksFilterInput | null,
};

export type ModelSuggestionBooksConnection = {
  __typename: "ModelSuggestionBooksConnection",
  items:  Array<SuggestionBooks | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserBooksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isbn?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  genre?: ModelSubscriptionStringInput | null,
  numberInSeries?: ModelSubscriptionStringInput | null,
  wordCount?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionIntInput | null,
  progress?: ModelSubscriptionIntInput | null,
  dateStarted?: ModelSubscriptionStringInput | null,
  dateFinished?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserBooksFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserBooksFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSuggestionBooksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isbn?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  genre?: ModelSubscriptionStringInput | null,
  numberInSeries?: ModelSubscriptionStringInput | null,
  wordCount?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSuggestionBooksFilterInput | null > | null,
  or?: Array< ModelSubscriptionSuggestionBooksFilterInput | null > | null,
};

export type CreateUserBooksMutationVariables = {
  input: CreateUserBooksInput,
  condition?: ModelUserBooksConditionInput | null,
};

export type CreateUserBooksMutation = {
  createUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserBooksMutationVariables = {
  input: UpdateUserBooksInput,
  condition?: ModelUserBooksConditionInput | null,
};

export type UpdateUserBooksMutation = {
  updateUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserBooksMutationVariables = {
  input: DeleteUserBooksInput,
  condition?: ModelUserBooksConditionInput | null,
};

export type DeleteUserBooksMutation = {
  deleteUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSuggestionBooksMutationVariables = {
  input: CreateSuggestionBooksInput,
  condition?: ModelSuggestionBooksConditionInput | null,
};

export type CreateSuggestionBooksMutation = {
  createSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSuggestionBooksMutationVariables = {
  input: UpdateSuggestionBooksInput,
  condition?: ModelSuggestionBooksConditionInput | null,
};

export type UpdateSuggestionBooksMutation = {
  updateSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSuggestionBooksMutationVariables = {
  input: DeleteSuggestionBooksInput,
  condition?: ModelSuggestionBooksConditionInput | null,
};

export type DeleteSuggestionBooksMutation = {
  deleteSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserBooksQueryVariables = {
  id: string,
};

export type GetUserBooksQuery = {
  getUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserBooksQueryVariables = {
  filter?: ModelUserBooksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserBooksQuery = {
  listUserBooks?:  {
    __typename: "ModelUserBooksConnection",
    items:  Array< {
      __typename: "UserBooks",
      id: string,
      isbn?: string | null,
      title?: string | null,
      author?: Array< string | null > | null,
      genre?: Array< string | null > | null,
      numberInSeries?: string | null,
      wordCount?: number | null,
      description?: string | null,
      rating?: number | null,
      progress?: number | null,
      dateStarted?: string | null,
      dateFinished?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSuggestionBooksQueryVariables = {
  id: string,
};

export type GetSuggestionBooksQuery = {
  getSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSuggestionBooksQueryVariables = {
  filter?: ModelSuggestionBooksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSuggestionBooksQuery = {
  listSuggestionBooks?:  {
    __typename: "ModelSuggestionBooksConnection",
    items:  Array< {
      __typename: "SuggestionBooks",
      id: string,
      isbn?: string | null,
      title?: string | null,
      author?: Array< string | null > | null,
      genre?: Array< string | null > | null,
      numberInSeries?: string | null,
      wordCount?: number | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserBooksSubscriptionVariables = {
  filter?: ModelSubscriptionUserBooksFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserBooksSubscription = {
  onCreateUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserBooksSubscriptionVariables = {
  filter?: ModelSubscriptionUserBooksFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserBooksSubscription = {
  onUpdateUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserBooksSubscriptionVariables = {
  filter?: ModelSubscriptionUserBooksFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserBooksSubscription = {
  onDeleteUserBooks?:  {
    __typename: "UserBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    rating?: number | null,
    progress?: number | null,
    dateStarted?: string | null,
    dateFinished?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSuggestionBooksSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionBooksFilterInput | null,
};

export type OnCreateSuggestionBooksSubscription = {
  onCreateSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSuggestionBooksSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionBooksFilterInput | null,
};

export type OnUpdateSuggestionBooksSubscription = {
  onUpdateSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSuggestionBooksSubscriptionVariables = {
  filter?: ModelSubscriptionSuggestionBooksFilterInput | null,
};

export type OnDeleteSuggestionBooksSubscription = {
  onDeleteSuggestionBooks?:  {
    __typename: "SuggestionBooks",
    id: string,
    isbn?: string | null,
    title?: string | null,
    author?: Array< string | null > | null,
    genre?: Array< string | null > | null,
    numberInSeries?: string | null,
    wordCount?: number | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
