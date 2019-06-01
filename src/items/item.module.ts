import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { itemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: itemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemModule {}
