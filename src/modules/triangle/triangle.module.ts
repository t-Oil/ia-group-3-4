import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
import { TriangleService } from './triangle.service';
import { TriangleController } from './triangle.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [TriangleService],
  controllers: [TriangleController],
})
export class TriangleModule {}
