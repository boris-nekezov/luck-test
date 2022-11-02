import {
  Body,
  Controller,
  Put,
  Post,
  Get,
  Query,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { LuckTestIteratorInterceptor } from '../../interceptors/luckTestIterator.interceptor';
import { LuckTestResultInterceptor } from '../../interceptors/luckTestResult.interceptor';
import { CreateLuckTestDTO, GiveAnswerDTO } from '../../DTOs/luckTest.dto';
import { TestAccessGuard } from './luckTest.guard';
import { LuckTestService } from './luckTest.service';
import { LuckTestResult } from '../../entities/testResult.entity';
import { LuckTestIterator } from '../../entities/testIterator.entity';

@ApiBearerAuth()
@ApiTags('Luck-Test')
@UseGuards(JwtAuthGuard)
@Controller('luck-test')
export class LuckTestController {
  constructor(private readonly luckTestService: LuckTestService) {}

  @Post()
  @ApiOperation({ summary: 'Create new test of desired length' })
  @ApiResponse({
    status: 200,
    description: 'Result of test creation',
    type: LuckTestResult,
  })
  @UseInterceptors(LuckTestIteratorInterceptor)
  createTest(@Request() req, @Body() luckTestDTO: CreateLuckTestDTO) {
    return this.luckTestService.createTest(req.user.userId, luckTestDTO.length);
  }

  @Get()
  @ApiOperation({ summary: 'Getting of tests created by user' })
  @ApiResponse({
    status: 200,
    description: 'List of tests created by user',
    isArray: true,
    type: LuckTestResult,
  })
  @UseInterceptors(LuckTestResultInterceptor)
  getTests(
    @Request() req,
    @Query('page') page: number,
    @Query('size') size: number,
  ) {
    return this.luckTestService.getTests(req.user.userId, page, size);
  }

  @Put(':testId')
  @ApiParam({ name: 'testId' })
  @ApiOperation({ summary: 'Sending of answer' })
  @ApiResponse({
    status: 201,
    description: 'Result of completed test step',
    type: LuckTestIterator,
  })
  @ApiResponse({
    status: 406,
    description: 'Luck Test has been already completed',
  })
  @UseGuards(TestAccessGuard)
  @UseInterceptors(LuckTestIteratorInterceptor)
  giveAnswer(@Request() req, @Body() giveAnswerDTO: GiveAnswerDTO) {
    return this.luckTestService.giveAnswer(req.luckTest, giveAnswerDTO);
  }

  @Get(':testId')
  @ApiParam({ name: 'testId' })
  @ApiOperation({ summary: 'Getting of test result' })
  @ApiResponse({
    status: 200,
    description: 'Result of completed test',
    type: LuckTestResult,
  })
  @ApiResponse({
    status: 406,
    description: 'Luck Test is still in progress',
  })
  @UseGuards(TestAccessGuard)
  @UseInterceptors(LuckTestResultInterceptor)
  getResult(@Request() req) {
    return this.luckTestService.getResult(req.luckTest);
  }
}
