import { Repository } from 'typeorm';
import { CreateEntryDto } from './dto/create-entry.dto';
import { Entry } from './entry.entity';
export declare class EntriesService {
    private entryRepository;
    constructor(entryRepository: Repository<Entry>);
    private readonly entries;
    create(createEntryDto: CreateEntryDto): Promise<Entry>;
    findAll(): Promise<Entry[]>;
    findOne(id: string): Promise<Entry>;
}
