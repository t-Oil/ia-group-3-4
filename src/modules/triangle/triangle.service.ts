import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class TriangleService {
  async calculate({ base, height }): Promise<number> {
    try {
      return (base * height) / 2;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
