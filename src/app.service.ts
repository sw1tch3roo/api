import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 3242423';
  }

  getUser(id: number): string {
    return `User ${id}`;
  }
}
