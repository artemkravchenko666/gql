import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostCommentsInput {
  @Field()
  title: string;
}