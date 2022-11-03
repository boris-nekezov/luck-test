import { Injectable } from '@nestjs/common';

@Injectable()
export class LuckTestEtolonCreator {
  generate(length: number) {
    return Array.from({ length }).map(() => Math.random() >= 0.5);
  }
}
