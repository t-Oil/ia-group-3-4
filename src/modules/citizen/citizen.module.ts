import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
import { CitizenService } from './citizen.service';
import { CitizenController } from './citizen.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [CitizenService],
  controllers: [CitizenController],
})
export class CitizenModule {}
