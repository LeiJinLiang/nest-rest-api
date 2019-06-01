import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateItemDto } from './dto/create-item.dto';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItemDto = new this.itemModel(createItemDto);
    return await createdItemDto.save();
  }
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
