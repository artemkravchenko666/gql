import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async findAll(arg: { authorId: number }): Promise<string[]> {
    return ['test'];
  }
}
