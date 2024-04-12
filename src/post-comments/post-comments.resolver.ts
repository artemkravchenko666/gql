import { Post } from './models/post.model';
import { Args, Int, Mutation, Subscription } from "@nestjs/graphql";
import { PubSub } from 'graphql-subscriptions';
import { UpvotePostInput } from './inputs/upvote-post.input';
import { PostsService } from './posts.service';
import { Comment } from './models/comment.model';
import { CommentInput } from "./inputs/comment.input";

const pubSub = new PubSub();

export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation((returns) => Post)
  async upvotePost(@Args('upvotePostData') upvotePostData: UpvotePostInput) {}

  @Mutation((returns) => Post)
  async addComment(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('comment', { type: () => Comment }) comment: CommentInput,
  ) {
    const newComment = this.commentsService.addComment({ id: postId, comment });
    pubSub.publish('commentAdded', { commentAdded: newComment });
    return newComment;
  }

  @Subscription((returns) => Comment, {
    name: 'commentAdded',
  })
  subscribeToCommentAdded() {
    return pubSub.asyncIterator('commentAdded');
  }
}
