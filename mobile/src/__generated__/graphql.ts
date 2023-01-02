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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Ad = {
  __typename?: 'Ad';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  property: Property;
  rentalUnit: Scalars['Float'];
  rentings: Array<Renting>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAdInput = {
  description: Scalars['String'];
  property: CreatePropertyInput;
  rentalUnit: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateFileInput = {
  data: Scalars['String'];
};

export type CreateInputRoomPartial = {
  pictures: Array<Scalars['String']>;
  surface: Scalars['Float'];
  title: Scalars['String'];
};

export type CreatePropertyInput = {
  address: Scalars['String'];
  pictures: Array<Scalars['String']>;
  rooms: Array<CreateInputRoomPartial>;
  surface: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateRentingInput = {
  ad: Scalars['String'];
  status: Scalars['String'];
  tenant: Scalars['String'];
};

export type CreateRoomInput = {
  pictures: Array<Scalars['String']>;
  property: Scalars['String'];
  surface: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateTenantInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  _id: Scalars['String'];
  filename: Scalars['String'];
  mimeType: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createProperty: Property;
  createRenting: Renting;
  createRoom: Room;
  createTenant: Tenant;
  removeAd: Ad;
  removeFile: File;
  removeProperty: Property;
  removeRoom: Room;
  updateAd: Ad;
  updateProperty: Property;
  updateRoom: Room;
  uploadFile: File;
};


export type MutationCreateAdArgs = {
  createAdInput: CreateAdInput;
};


export type MutationCreatePropertyArgs = {
  createProperty: CreatePropertyInput;
};


export type MutationCreateRentingArgs = {
  createRentingInput: CreateRentingInput;
};


export type MutationCreateRoomArgs = {
  createRoom: CreateRoomInput;
};


export type MutationCreateTenantArgs = {
  createTenant: CreateTenantInput;
};


export type MutationRemoveAdArgs = {
  id: Scalars['String'];
};


export type MutationRemoveFileArgs = {
  id: Scalars['String'];
};


export type MutationRemovePropertyArgs = {
  id: Scalars['String'];
};


export type MutationRemoveRoomArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAdArgs = {
  updateAdInput: UpdateAdInput;
};


export type MutationUpdatePropertyArgs = {
  updateProperty: UpdatePropertyInput;
};


export type MutationUpdateRoomArgs = {
  updateRoom: UpdateRoomInput;
};


export type MutationUploadFileArgs = {
  uploadFile: CreateFileInput;
};

export type PaginatedAd = {
  __typename?: 'PaginatedAd';
  data: Array<Ad>;
  total: Scalars['Int'];
};

export type Property = {
  __typename?: 'Property';
  _id: Scalars['String'];
  address: Scalars['String'];
  pictures: Array<File>;
  rooms: Array<Room>;
  surface: Scalars['Float'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ad: Ad;
  ads: PaginatedAd;
  properties: Array<Property>;
  property: Property;
  renting: Renting;
  rentings: Renting;
  room: Room;
  rooms: Array<Room>;
  tenant: Tenant;
  tenantByEmail: Tenant;
};


export type QueryAdArgs = {
  id: Scalars['String'];
};


export type QueryAdsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryPropertyArgs = {
  id: Scalars['String'];
};


export type QueryRentingArgs = {
  id: Scalars['String'];
};


export type QueryRoomArgs = {
  id: Scalars['Float'];
};


export type QueryTenantArgs = {
  id: Scalars['String'];
};


export type QueryTenantByEmailArgs = {
  email: Scalars['String'];
};

export type Renting = {
  __typename?: 'Renting';
  _id: Scalars['String'];
  ad: Ad;
  status: Scalars['String'];
  tenant: Tenant;
};

export type Room = {
  __typename?: 'Room';
  _id: Scalars['String'];
  pictures: Array<File>;
  property: Property;
  surface: Scalars['Float'];
  title: Scalars['String'];
};

export type Tenant = {
  __typename?: 'Tenant';
  _id: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UpdateAdInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  property?: InputMaybe<CreatePropertyInput>;
  rentalUnit?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePropertyInput = {
  address?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  pictures?: InputMaybe<Array<Scalars['String']>>;
  rooms: Array<Scalars['String']>;
  surface?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateRoomInput = {
  id: Scalars['String'];
  pictures?: InputMaybe<Array<Scalars['String']>>;
  property?: InputMaybe<Scalars['String']>;
  surface?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GetAdsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetAdsQuery = { __typename?: 'Query', ads: { __typename?: 'PaginatedAd', total: number, data: Array<{ __typename?: 'Ad', _id: string, title: string }> } };


export const GetAdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdsQuery, GetAdsQueryVariables>;