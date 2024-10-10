import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ResultsService } from './results.service';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateResultDto } from './dto/create-result.dto';
import { ResponseUtils } from '../../shared/utils/response.utils';
import { UpdateGeneralInformation } from './dto/update-general-information.dto';
import { DataReturnEnum } from '../../shared/enum/queries.enum';

@ApiTags('Results')
@Controller()
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Is a reference to the page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Is a reference to the limit of items per page',
  })
  @ApiOperation({ summary: 'Find all results' })
  @Get()
  async find(@Query('page') page: string, @Query('limit') limit: string) {
    return this.resultsService
      .findResults({ page: +page, limit: +limit })
      .then((el) =>
        ResponseUtils.format({
          description: 'Results found',
          status: HttpStatus.OK,
          data: el,
        }),
      );
  }

  @ApiOperation({ summary: 'Create a result' })
  @Post()
  async createResult(@Body() createResult: CreateResultDto) {
    return this.resultsService.createResult(createResult).then((result) =>
      ResponseUtils.format({
        description: 'Result created',
        status: HttpStatus.CREATED,
        data: result,
      }),
    );
  }

  @ApiOperation({ summary: 'Delete a result' })
  @ApiParam({
    name: 'resultId',
    required: true,
    type: Number,
    description: 'Is a reference to the result id',
  })
  @Delete(':id/delete')
  async deleteResult(@Param('resultId') resultId: string) {
    return this.resultsService.deleteResult(+resultId).then(() =>
      ResponseUtils.format({
        description: 'Result deleted',
        status: HttpStatus.OK,
      }),
    );
  }

  @ApiOperation({ summary: 'Update general information' })
  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
    description: 'Is a reference to the result id',
  })
  @ApiQuery({
    name: 'return',
    required: false,
    type: String,
    enum: DataReturnEnum,
    description: 'Is a reference to return data',
  })
  @Patch(':id/general-information')
  async updateGeneralInformation(
    @Param('id') resultId: string,
    @Query('return') returnData: DataReturnEnum,
    @Body() generalInformation: UpdateGeneralInformation,
  ) {
    return this.resultsService
      .updateGeneralInfo(+resultId, generalInformation, returnData)
      .then((result) =>
        ResponseUtils.format({
          description: 'General information was updated correctly',
          data: result,
          status: HttpStatus.OK,
        }),
      );
  }

  @ApiOperation({ summary: 'Find general information' })
  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
    description: 'Is a reference to the result id',
  })
  @Get(':id/general-information')
  async findGeneralInformation(@Param('id') resultId: string) {
    return this.resultsService.findGeneralInfo(+resultId).then((result) =>
      ResponseUtils.format({
        description: 'General information was found correctly',
        data: result,
        status: HttpStatus.OK,
      }),
    );
  }
}