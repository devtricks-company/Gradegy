import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
@Module({
  imports: [
    //the config module is for configuration evniroment,and depends which env file is used.decied apply config as development(local for test) or production

    ConfigModule.forRoot({
      //read configuration from the yaml file
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
