import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';

import { Entry } from './entry.entity';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';

@Controller('blog')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Get()
  async findAll(): Promise<Entry[]> {
    return this.entriesService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createEntryDto: CreateEntryDto) {
    await this.entriesService.create(createEntryDto);
    return {
      message: 'Successfully created the entry',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Entry> {
    return this.entriesService.findOne(id);
  }
}
