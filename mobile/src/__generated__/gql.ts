/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetAds($sort: String, $offset: Int, $limit: Int) {\n    ads(sort: $sort, offset: $offset, limit: $limit) {\n      total,\n      data {\n        _id,\n        title\n      }\n    }\n  }\n": types.GetAdsDocument,
};

export function gql(source: "\n  query GetAds($sort: String, $offset: Int, $limit: Int) {\n    ads(sort: $sort, offset: $offset, limit: $limit) {\n      total,\n      data {\n        _id,\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAds($sort: String, $offset: Int, $limit: Int) {\n    ads(sort: $sort, offset: $offset, limit: $limit) {\n      total,\n      data {\n        _id,\n        title\n      }\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;