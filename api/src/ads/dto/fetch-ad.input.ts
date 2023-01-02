import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class FetchAdInput {
  @Field(() => Int, { nullable: true })
  offset?: number;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => String, { nullable: true })
  sort?: 'createdAt:ASC' | 'updatedAt:DESC';
}
