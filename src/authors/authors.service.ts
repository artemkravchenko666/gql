import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  async findOneById(
    id: number,
  ): Promise<{ id: number; firstName: string; lastName: string }> {
    return {
      id: 1,
      firstName: 'test',
      lastName: 'lastname',
    };
  }
}
