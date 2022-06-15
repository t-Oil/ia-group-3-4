import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class TriangleCalculateDto {
  @ApiProperty({ default: 5, required: true })
  @IsNotEmpty({
    message: 'base is required.',
  })
  @IsNumber()
  base: number;

  @ApiProperty({ default: 3, required: true })
  @IsNotEmpty({
    message: 'height is required.',
  })
  @IsNumber()
  height: number;
}
