import { Module } from '@nestjs/common';
import { PostCommentsService } from './post-comments.service';
import { PostCommentsResolver } from './post-comments.resolver';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [PostCommentsService, PostCommentsResolver],
  exports: [PostCommentsService],
})
export class PostCommentsModule {}
