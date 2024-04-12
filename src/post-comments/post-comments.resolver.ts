import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { PostCommentsService } from './post-comments.service';
import { Comment } from './models/comment.model';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions/dist/pubsub';

@Resolver()
export class PostCommentsResolver {
  constructor(
    private readonly postCommentsService: PostCommentsService,
    @Inject('PUB_SUB') private readonly pubSub: PubSub,
  ) {}

  @Subscription((returns) => Comment, {
    name: 'commentAdded',
    filter: (payload, variables) =>
      payload.commentAdded.title === variables.title,
  })
  subscribeToCommentAdded(@Args('title') title: string) {
    return this.pubSub.asyncIterator('commentAdded');
  }
}
