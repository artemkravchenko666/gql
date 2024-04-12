export class PostsService {
  async findAll(arg: { authorId: number }): Promise<string[]> {
    return ['test'];
  }
}
