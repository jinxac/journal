import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntryDto } from './dto/create-entry.dto';
import { Entry } from './entry.entity';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
  ) {}
  private readonly entries: Entry[] = [];

  create(createEntryDto: CreateEntryDto): Promise<Entry> {
    const entry = new Entry();
    entry.title = createEntryDto.title;
    entry.description = createEntryDto.description;
    return this.entryRepository.save(entry);
  }

  findAll(): Promise<Entry[]> {
    return this.entryRepository.find();
  }
}
