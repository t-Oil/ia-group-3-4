import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriangleModule } from '../triangle/triangle.module';
import { CitizenModule } from '../citizen/citizen.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    TriangleModule,
    CitizenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
