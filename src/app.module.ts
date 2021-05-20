import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './items/item.module';
import { CoresMiddleware } from './cors.middleware';
import config from './config/keys';

@Module({
  imports: [ItemModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CoresMiddleware)
      .forRoutes('*');
  }
}
