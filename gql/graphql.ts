/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A scalar to validate the email as it is defined in the HTML specification. */
  Email: any;
  /** An URL as defined by RFC1738. For example, `https://grafbase.com/foo/` or `mailto:example@grafbase.com`. */
  URL: any;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  item: Item;
};

/** Input to create a new CommentCommentRelateItemItem */
export type CommentCommentRelateItemItemCreateInput = {
  author: ItemItemRelateUserUserCreateInput;
  createdAt: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['URL'];
  votes?: InputMaybe<Array<InputMaybe<ItemItemRelateVoteVoteCreateInput>>>;
};

/** Input to create a new CommentCommentRelateItemItem relation */
export type CommentCommentRelateItemItemCreateRelationInput = {
  create?: InputMaybe<CommentCommentRelateItemItemCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a CommentCommentRelateItemItem relation */
export type CommentCommentRelateItemItemUpdateRelationInput = {
  create?: InputMaybe<CommentCommentRelateItemItemCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to create a new CommentCommentRelateUserUser */
export type CommentCommentRelateUserUserCreateInput = {
  createdAt: Scalars['Int'];
  email: Scalars['Email'];
  imageUrl?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<UserItemRelateUserItemCreateInput>>>;
  name: Scalars['String'];
};

/** Input to create a new CommentCommentRelateUserUser relation */
export type CommentCommentRelateUserUserCreateRelationInput = {
  create?: InputMaybe<CommentCommentRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a CommentCommentRelateUserUser relation */
export type CommentCommentRelateUserUserUpdateRelationInput = {
  create?: InputMaybe<CommentCommentRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a new Comment */
export type CommentCreateInput = {
  author: CommentCommentRelateUserUserCreateRelationInput;
  content: Scalars['String'];
  createdAt: Scalars['Int'];
  item: CommentCommentRelateItemItemCreateRelationInput;
};

export type CommentCreatePayload = {
  __typename?: 'CommentCreatePayload';
  comment?: Maybe<Comment>;
};

export type CommentDeletePayload = {
  __typename?: 'CommentDeletePayload';
  deletedId: Scalars['ID'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node: Comment;
};

/** Input to create a new Comment */
export type CommentUpdateInput = {
  author?: InputMaybe<CommentCommentRelateUserUserUpdateRelationInput>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  item?: InputMaybe<CommentCommentRelateItemItemUpdateRelationInput>;
};

export type CommentUpdatePayload = {
  __typename?: 'CommentUpdatePayload';
  comment?: Maybe<Comment>;
};

export type Item = {
  __typename?: 'Item';
  author: User;
  comments?: Maybe<CommentConnection>;
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['URL'];
  votes?: Maybe<VoteConnection>;
};


export type ItemCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ItemVotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Input to create a new ItemCommentRelateItemComment */
export type ItemCommentRelateItemCommentCreateInput = {
  author: CommentCommentRelateUserUserCreateInput;
  content: Scalars['String'];
  createdAt: Scalars['Int'];
};

/** Input to create a new ItemCommentRelateItemComment relation */
export type ItemCommentRelateItemCommentCreateRelationInput = {
  create?: InputMaybe<ItemCommentRelateItemCommentCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a ItemCommentRelateItemComment relation */
export type ItemCommentRelateItemCommentUpdateRelationInput = {
  create?: InputMaybe<ItemCommentRelateItemCommentCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a new Item */
export type ItemCreateInput = {
  author: ItemItemRelateUserUserCreateRelationInput;
  comments?: InputMaybe<Array<InputMaybe<ItemCommentRelateItemCommentCreateRelationInput>>>;
  createdAt: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['URL'];
  votes?: InputMaybe<Array<InputMaybe<ItemItemRelateVoteVoteCreateRelationInput>>>;
};

export type ItemCreatePayload = {
  __typename?: 'ItemCreatePayload';
  item?: Maybe<Item>;
};

export type ItemDeletePayload = {
  __typename?: 'ItemDeletePayload';
  deletedId: Scalars['ID'];
};

export type ItemEdge = {
  __typename?: 'ItemEdge';
  cursor: Scalars['String'];
  node: Item;
};

/** Input to create a new ItemItemRelateUserUser */
export type ItemItemRelateUserUserCreateInput = {
  comments?: InputMaybe<Array<InputMaybe<UserCommentRelateUserCommentCreateInput>>>;
  createdAt: Scalars['Int'];
  email: Scalars['Email'];
  imageUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Input to create a new ItemItemRelateUserUser relation */
export type ItemItemRelateUserUserCreateRelationInput = {
  create?: InputMaybe<ItemItemRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a ItemItemRelateUserUser relation */
export type ItemItemRelateUserUserUpdateRelationInput = {
  create?: InputMaybe<ItemItemRelateUserUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to create a new ItemItemRelateVoteVote */
export type ItemItemRelateVoteVoteCreateInput = {
  positive: Scalars['Boolean'];
  user: VoteUserRelateVoteUserCreateInput;
};

/** Input to create a new ItemItemRelateVoteVote relation */
export type ItemItemRelateVoteVoteCreateRelationInput = {
  create?: InputMaybe<ItemItemRelateVoteVoteCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a ItemItemRelateVoteVote relation */
export type ItemItemRelateVoteVoteUpdateRelationInput = {
  create?: InputMaybe<ItemItemRelateVoteVoteCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to create a new Item */
export type ItemUpdateInput = {
  author?: InputMaybe<ItemItemRelateUserUserUpdateRelationInput>;
  comments?: InputMaybe<Array<InputMaybe<ItemCommentRelateItemCommentUpdateRelationInput>>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['URL']>;
  votes?: InputMaybe<Array<InputMaybe<ItemItemRelateVoteVoteUpdateRelationInput>>>;
};

export type ItemUpdatePayload = {
  __typename?: 'ItemUpdatePayload';
  item?: Maybe<Item>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Comment */
  commentCreate?: Maybe<CommentCreatePayload>;
  /** Delete a Comment by ID */
  commentDelete?: Maybe<CommentDeletePayload>;
  /** Update a Comment */
  commentUpdate?: Maybe<CommentUpdatePayload>;
  /** Create a Item */
  itemCreate?: Maybe<ItemCreatePayload>;
  /** Delete a Item by ID */
  itemDelete?: Maybe<ItemDeletePayload>;
  /** Update a Item */
  itemUpdate?: Maybe<ItemUpdatePayload>;
  /** Create a User */
  userCreate?: Maybe<UserCreatePayload>;
  /** Delete a User by ID */
  userDelete?: Maybe<UserDeletePayload>;
  /** Update a User */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** Create a Vote */
  voteCreate?: Maybe<VoteCreatePayload>;
  /** Delete a Vote by ID */
  voteDelete?: Maybe<VoteDeletePayload>;
  /** Update a Vote */
  voteUpdate?: Maybe<VoteUpdatePayload>;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['ID'];
  input: CommentUpdateInput;
};


export type MutationItemCreateArgs = {
  input: ItemCreateInput;
};


export type MutationItemDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationItemUpdateArgs = {
  id: Scalars['ID'];
  input: ItemUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['ID'];
  input: UserUpdateInput;
};


export type MutationVoteCreateArgs = {
  input: VoteCreateInput;
};


export type MutationVoteDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationVoteUpdateArgs = {
  id: Scalars['ID'];
  input: VoteUpdateInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get Comment by ID */
  comment?: Maybe<Comment>;
  /** Paginated query to fetch the whole list of `Comment`. */
  commentCollection?: Maybe<CommentConnection>;
  /** Get Item by ID */
  item?: Maybe<Item>;
  /** Paginated query to fetch the whole list of `Item`. */
  itemCollection?: Maybe<ItemConnection>;
  /** Get User by ID */
  user?: Maybe<User>;
  /** Paginated query to fetch the whole list of `User`. */
  userCollection?: Maybe<UserConnection>;
  /** Get Vote by ID */
  vote?: Maybe<Vote>;
  /** Paginated query to fetch the whole list of `Vote`. */
  voteCollection?: Maybe<VoteConnection>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryVoteArgs = {
  id: Scalars['ID'];
};


export type QueryVoteCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<CommentConnection>;
  createdAt: Scalars['Int'];
  email: Scalars['Email'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  items?: Maybe<ItemConnection>;
  name: Scalars['String'];
};


export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Input to create a new UserCommentRelateUserComment */
export type UserCommentRelateUserCommentCreateInput = {
  content: Scalars['String'];
  createdAt: Scalars['Int'];
  item: CommentCommentRelateItemItemCreateInput;
};

/** Input to create a new UserCommentRelateUserComment relation */
export type UserCommentRelateUserCommentCreateRelationInput = {
  create?: InputMaybe<UserCommentRelateUserCommentCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a UserCommentRelateUserComment relation */
export type UserCommentRelateUserCommentUpdateRelationInput = {
  create?: InputMaybe<UserCommentRelateUserCommentCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a new User */
export type UserCreateInput = {
  comments?: InputMaybe<Array<InputMaybe<UserCommentRelateUserCommentCreateRelationInput>>>;
  createdAt: Scalars['Int'];
  email: Scalars['Email'];
  imageUrl?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<UserItemRelateUserItemCreateRelationInput>>>;
  name: Scalars['String'];
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  deletedId: Scalars['ID'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

/** Input to create a new UserItemRelateUserItem */
export type UserItemRelateUserItemCreateInput = {
  comments?: InputMaybe<Array<InputMaybe<ItemCommentRelateItemCommentCreateInput>>>;
  createdAt: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['URL'];
  votes?: InputMaybe<Array<InputMaybe<ItemItemRelateVoteVoteCreateInput>>>;
};

/** Input to create a new UserItemRelateUserItem relation */
export type UserItemRelateUserItemCreateRelationInput = {
  create?: InputMaybe<UserItemRelateUserItemCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a UserItemRelateUserItem relation */
export type UserItemRelateUserItemUpdateRelationInput = {
  create?: InputMaybe<UserItemRelateUserItemCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to create a new User */
export type UserUpdateInput = {
  comments?: InputMaybe<Array<InputMaybe<UserCommentRelateUserCommentUpdateRelationInput>>>;
  createdAt?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['Email']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<UserItemRelateUserItemUpdateRelationInput>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['ID'];
  positive: Scalars['Boolean'];
  user: User;
};

export type VoteConnection = {
  __typename?: 'VoteConnection';
  edges?: Maybe<Array<Maybe<VoteEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a new Vote */
export type VoteCreateInput = {
  positive: Scalars['Boolean'];
  user: VoteUserRelateVoteUserCreateRelationInput;
};

export type VoteCreatePayload = {
  __typename?: 'VoteCreatePayload';
  vote?: Maybe<Vote>;
};

export type VoteDeletePayload = {
  __typename?: 'VoteDeletePayload';
  deletedId: Scalars['ID'];
};

export type VoteEdge = {
  __typename?: 'VoteEdge';
  cursor: Scalars['String'];
  node: Vote;
};

/** Input to create a new Vote */
export type VoteUpdateInput = {
  positive?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<VoteUserRelateVoteUserUpdateRelationInput>;
};

export type VoteUpdatePayload = {
  __typename?: 'VoteUpdatePayload';
  vote?: Maybe<Vote>;
};

/** Input to create a new VoteUserRelateVoteUser */
export type VoteUserRelateVoteUserCreateInput = {
  comments?: InputMaybe<Array<InputMaybe<UserCommentRelateUserCommentCreateInput>>>;
  createdAt: Scalars['Int'];
  email: Scalars['Email'];
  imageUrl?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<UserItemRelateUserItemCreateInput>>>;
  name: Scalars['String'];
};

/** Input to create a new VoteUserRelateVoteUser relation */
export type VoteUserRelateVoteUserCreateRelationInput = {
  create?: InputMaybe<VoteUserRelateVoteUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to update a VoteUserRelateVoteUser relation */
export type VoteUserRelateVoteUserUpdateRelationInput = {
  create?: InputMaybe<VoteUserRelateVoteUserCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type CommentAddMutationVariables = Exact<{
  content: Scalars['String'];
  authorId: Scalars['ID'];
  itemId: Scalars['ID'];
  createdAt: Scalars['Int'];
}>;


export type CommentAddMutation = { __typename?: 'Mutation', commentCreate?: { __typename?: 'CommentCreatePayload', comment?: { __typename: 'Comment' } | null } | null };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', userCollection?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', id: string, name: string, email: any, imageUrl?: string | null, createdAt: number } } | null> | null } | null };

export type UserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['Email'];
  createdAt: Scalars['Int'];
  imageUrl: Scalars['String'];
}>;


export type UserMutation = { __typename?: 'Mutation', userCreate?: { __typename: 'UserCreatePayload' } | null };

export type ItemsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsListQuery = { __typename?: 'Query', itemCollection?: { __typename?: 'ItemConnection', edges?: Array<{ __typename?: 'ItemEdge', node: { __typename?: 'Item', id: string, title: string, url: any, createdAt: number, comments?: { __typename?: 'CommentConnection', edges?: Array<{ __typename: 'CommentEdge' } | null> | null } | null, votes?: { __typename?: 'VoteConnection', edges?: Array<{ __typename: 'VoteEdge' } | null> | null } | null, author: { __typename?: 'User', id: string, name: string, imageUrl?: string | null } } } | null> | null } | null };

export type ItemOneQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItemOneQuery = { __typename?: 'Query', item?: { __typename?: 'Item', id: string, title: string, url: any, createdAt: number, comments?: { __typename?: 'CommentConnection', edges?: Array<{ __typename?: 'CommentEdge', node: { __typename?: 'Comment', content: string, createdAt: number, author: { __typename?: 'User', id: string, name: string, imageUrl?: string | null } } } | null> | null } | null, votes?: { __typename?: 'VoteConnection', edges?: Array<{ __typename: 'VoteEdge' } | null> | null } | null, author: { __typename?: 'User', id: string, name: string, imageUrl?: string | null } } | null };

export type ItemMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['URL'];
  createdAt: Scalars['Int'];
  authorId: Scalars['ID'];
}>;


export type ItemMutation = { __typename?: 'Mutation', itemCreate?: { __typename?: 'ItemCreatePayload', item?: { __typename?: 'Item', id: string } | null } | null };

export type UsersListQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersListQuery = { __typename?: 'Query', userCollection?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', id: string, name: string, imageUrl?: string | null, createdAt: number } } | null> | null } | null };


export const CommentAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CommentAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"item"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<CommentAddMutation, CommentAddMutationVariables>;
export const ViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ViewerQuery, ViewerQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"imageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<UserMutation, UserMutationVariables>;
export const ItemsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ItemsListQuery, ItemsListQueryVariables>;
export const ItemOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ItemOneQuery, ItemOneQueryVariables>;
export const ItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Item"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"URL"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createdAt"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ItemMutation, ItemMutationVariables>;
export const UsersListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UsersListQuery, UsersListQueryVariables>;