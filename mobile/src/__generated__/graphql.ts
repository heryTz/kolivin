/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Ad = {
  __typename?: 'Ad'
  _id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Float']>
  description?: Maybe<Scalars['String']>
  property?: Maybe<Property>
  rentalUnit?: Maybe<Scalars['Int']>
  rentings?: Maybe<Array<Maybe<Renting>>>
  title?: Maybe<Scalars['String']>
}

export type AdPaginated = {
  __typename?: 'AdPaginated'
  data: Array<Maybe<Ad>>
  total?: Maybe<Scalars['Int']>
}

export type CreateAdInput = {
  description: Scalars['String']
  property: CreatePropertyInput
  rentalUnit: Scalars['Int']
  title: Scalars['String']
}

export type CreateFileInput = {
  data: Scalars['String']
}

export type CreatePropertyInput = {
  address?: InputMaybe<Scalars['String']>
  pictures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  rooms?: InputMaybe<Array<InputMaybe<InputRoom>>>
  surface?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
}

export type CreateRentingInput = {
  ad: Scalars['String']
  status: Scalars['String']
  tenant: Scalars['String']
}

export type CreateRoomInput = {
  pictures: Array<InputMaybe<Scalars['String']>>
  property: Scalars['String']
  surface: Scalars['Int']
  title: Scalars['String']
}

export type CreateTenantInput = {
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type File = {
  __typename?: 'File'
  _id?: Maybe<Scalars['String']>
  filename?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
}

export type InputRoom = {
  pictures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  surface?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAd: Ad
  createProperty: Property
  createRenting: Renting
  createRoom: Room
  createTenant: Tenant
  deleteFile?: Maybe<File>
  removeAd?: Maybe<Ad>
  removeProperty?: Maybe<Property>
  removeRoom?: Maybe<Room>
  updateAd: Ad
  updateProperty: Property
  updateRenting: Renting
  updateRoom: Room
  uploadFile: File
}

export type MutationCreateAdArgs = {
  createAdInput: CreateAdInput
}

export type MutationCreatePropertyArgs = {
  createPropertyInput: CreatePropertyInput
}

export type MutationCreateRentingArgs = {
  createRentingInput: CreateRentingInput
}

export type MutationCreateRoomArgs = {
  createRoomInput: CreateRoomInput
}

export type MutationCreateTenantArgs = {
  createTenantInput: CreateTenantInput
}

export type MutationDeleteFileArgs = {
  id: Scalars['String']
}

export type MutationRemoveAdArgs = {
  id: Scalars['String']
}

export type MutationRemovePropertyArgs = {
  id: Scalars['String']
}

export type MutationRemoveRoomArgs = {
  id: Scalars['String']
}

export type MutationUpdateAdArgs = {
  updateAdInput: UpdateAdInput
}

export type MutationUpdatePropertyArgs = {
  updatePropertyInput: UpdatePropertyInput
}

export type MutationUpdateRentingArgs = {
  updateRentingInput: UpdateRentingInput
}

export type MutationUpdateRoomArgs = {
  updateRoomInput: UpdateRoomInput
}

export type MutationUploadFileArgs = {
  createFileInput: CreateFileInput
}

export type Property = {
  __typename?: 'Property'
  _id?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
  pictures?: Maybe<Array<Maybe<File>>>
  rooms?: Maybe<Array<Maybe<Room>>>
  surface?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  ad?: Maybe<Ad>
  ads: AdPaginated
  properties: Array<Maybe<Property>>
  property?: Maybe<Property>
  renting?: Maybe<Renting>
  rentings: Array<Maybe<Renting>>
  room?: Maybe<Room>
  rooms: Array<Maybe<Room>>
  tenant?: Maybe<Tenant>
  tenantFindByEmail?: Maybe<Tenant>
  tenants: Array<Maybe<Tenant>>
}

export type QueryAdArgs = {
  id: Scalars['String']
}

export type QueryAdsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
}

export type QueryPropertyArgs = {
  id: Scalars['String']
}

export type QueryRentingArgs = {
  id: Scalars['Int']
}

export type QueryRoomArgs = {
  id: Scalars['String']
}

export type QueryTenantArgs = {
  id: Scalars['Int']
}

export type QueryTenantFindByEmailArgs = {
  email: Scalars['String']
}

export type Renting = {
  __typename?: 'Renting'
  _id?: Maybe<Scalars['String']>
  ad?: Maybe<Ad>
  status?: Maybe<Scalars['String']>
  tenant?: Maybe<Tenant>
}

export type Room = {
  __typename?: 'Room'
  _id?: Maybe<Scalars['String']>
  pictures?: Maybe<Array<Maybe<File>>>
  surface?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
}

export type Tenant = {
  __typename?: 'Tenant'
  _id?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
}

export type UpdateAdInput = {
  description?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  rentalUnit?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdatePropertyInput = {
  address?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  pictures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  rooms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  surface?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
}

export type UpdateRentingInput = {
  id: Scalars['Int']
  status?: InputMaybe<Scalars['String']>
}

export type UpdateRoomInput = {
  id: Scalars['String']
  pictures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  surface?: InputMaybe<Scalars['Int']>
  title?: InputMaybe<Scalars['String']>
}

export type GetAdsQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']>
  offset?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}>

export type GetAdsQuery = {
  __typename?: 'Query'
  ads: { __typename?: 'AdPaginated'; total?: number | null; data: Array<{ __typename?: 'Ad'; _id?: string | null; title?: string | null } | null> }
}

export const GetAdsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAds' },
      variableDefinitions: [
        { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        { kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } }, type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ads' },
            arguments: [
              { kind: 'Argument', name: { kind: 'Name', value: 'sort' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } } },
              { kind: 'Argument', name: { kind: 'Name', value: 'offset' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'offset' } } },
              { kind: 'Argument', name: { kind: 'Name', value: 'limit' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } } },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAdsQuery, GetAdsQueryVariables>
