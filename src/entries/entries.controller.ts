import { Controller, Get, Post, Body } from '@nestjs/common';

import { Entry } from './entry.entity';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Get()
  async findAll(): Promise<Entry[]> {
    return this.entriesService.findAll();
  }

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto) {
    this.entriesService.create(createEntryDto);
  }
}
