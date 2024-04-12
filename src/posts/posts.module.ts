import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostCommentsModule } from '../post-comments/post-comments.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [PostCommentsModule, CommonModule],
  providers: [PostsService, PostsResolver],
  exports: [PostsService],
})
export class PostsModule {}
