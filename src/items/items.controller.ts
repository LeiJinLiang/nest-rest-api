import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all items';
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name : ${createItemDto.name}, Description : ${
      createItemDto.description
    } , Qty : ${createItemDto.qty}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }
}
