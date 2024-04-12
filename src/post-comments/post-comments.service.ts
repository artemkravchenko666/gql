import { v4 as uuidv4 } from 'uuid';
import { PostCommentsInput } from './inputs/post-comments.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostCommentsService {
  async addComment(
    id: number,
    comment: PostCommentsInput,
  ): Promise<{
    id: string;
    title: string;
  }> {
    return { id: uuidv4(), title: comment.title };
  }

  async testReq(str: string): Promise<string> {
    if (true) {
      
    }
    return str;
  }
}
