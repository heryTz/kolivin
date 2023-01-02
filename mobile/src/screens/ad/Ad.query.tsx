import { gql } from 'src/__generated__'

export const GET_ADS = gql(`
  query GetAds($sort: String, $offset: Int, $limit: Int) {
    ads(sort: $sort, offset: $offset, limit: $limit) {
      total,
      data {
        _id,
        title
      }
    }
  }
`)
