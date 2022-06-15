import { Post, Controller, Body } from '@nestjs/common';
import { TriangleService } from './triangle.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { TriangleCalculateDto } from './dto/triangleCalculate.dto';

@ApiTags('triangle')
@Controller('triangle')
export class TriangleController {
  constructor(private readonly triangleService: TriangleService) {}

  @Post()
  @ApiQuery({ type: TriangleCalculateDto })
  async calculate(
    @Body() triangleCalculateDto: TriangleCalculateDto,
  ): Promise<number> {
    return this.triangleService
      .calculate(triangleCalculateDto)
      .then((response) => {
        return `"area": ${response}`;
      })
      .catch((error) => {
        return error;
      });
  }
}
