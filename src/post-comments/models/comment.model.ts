import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field()
  id: string;

  @Field()
  title: string;
}
