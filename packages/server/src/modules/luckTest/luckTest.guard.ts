import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { LuckTestDocument } from 'src/schemas/luckTest.schema';
import { LuckTestService } from './luckTest.service';

@Injectable()
export class TestAccessGuard implements CanActivate {
  constructor(
    @Inject(LuckTestService) private luckTestService: LuckTestService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    let luckTest: LuckTestDocument | null = null;

    const request = context.switchToHttp().getRequest();

    const userId = request.user.userId;
    const testId = request.params.testId;

    try {
      luckTest = await this.luckTestService.getTest(testId);
    } catch (exep) {
      throw new BadRequestException();
    }

    if (!luckTest || luckTest.user.toString() !== userId) {
      throw new NotFoundException();
    }

    request.luckTest = luckTest;

    return true;
  }
}
