import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CitizenValidateDto {
  @ApiProperty({ default: '1201541462234', required: true })
  @IsNotEmpty({
    message: 'citizen_id is required.',
  })
  @IsString()
  @MinLength(13, {
    message: 'citizenId must be equal to 13 characters',
  })
  @MaxLength(13, {
    message: 'citizenId must be equal to 13 characters',
  })
  citizenId: string;
}
