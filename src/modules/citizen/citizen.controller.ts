import {
  Post,
  Controller,
  Body,
  UsePipes,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CitizenValidateDto } from './dto/citizenIdValidate.dto';

@ApiTags('citizen')
@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}

  @Post('/validate')
  @ApiQuery({ type: CitizenValidateDto })
  @UsePipes(new ValidationPipe({ transform: true }))
  async calculate(
    @Body() citizenValidateDto: CitizenValidateDto,
  ): Promise<{ success: boolean; error_code: number; error_msg: string }> {
    return this.citizenService
      .validate(citizenValidateDto)
      .then((response) => {
        return {
          success: response,
          error_code: HttpStatus.OK,
          error_msg: '',
        };
      })
      .catch((error) => {
        return error.response;
      });
  }
}
