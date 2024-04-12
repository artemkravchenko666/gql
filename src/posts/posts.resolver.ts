import { Post } from './models/post.model';
import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { UpvotePostInput } from './inputs/upvote-post.input';
import { PostsService } from './posts.service';
import { PostCommentsInput } from '../post-comments/inputs/post-comments.input';
import { PostCommentsService } from '../post-comments/post-comments.service';
import { Comment } from '../post-comments/models/comment.model';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions/dist/pubsub';

@Resolver()
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly postCommentsService: PostCommentsService,
    @Inject('PUB_SUB') private readonly pubSub: PubSub,
  ) {}

  @Mutation((returns) => Post)
  async upvotePost(
    @Args('upvotePostData') upvotePostData: UpvotePostInput,
  ): Promise<Post> {
    return { id: 1, title: 'qwertyt', votes: 321 };
  }

  @Mutation((returns) => Comment)
  async addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('comment', { type: () => PostCommentsInput })
    comment: PostCommentsInput,
  ): Promise<Comment> {
    const newComment = await this.postCommentsService.addComment(
      postId,
      comment,
    );
    await this.pubSub.publish('commentAdded', { commentAdded: newComment });
    return newComment;
  }

  @Mutation((returns) => String)
  async testReq(@Args('str') str: string) {
    return this.postCommentsService.testReq(str);
  }
}
