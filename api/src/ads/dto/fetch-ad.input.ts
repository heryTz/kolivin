import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class FetchAdInput {
  @Field(() => Int)
  offset?: number;

  @Field(() => Int)
  limit?: number;

  @Field()
  sort?: 'createdAt:ASC' | 'updatedAt:DESC';
}
