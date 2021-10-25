import { Entry } from './entry.entity';
import { EntriesService } from './entries.service';
import { CreateEntryDto } from './dto/create-entry.dto';
export declare class EntriesController {
    private readonly entriesService;
    constructor(entriesService: EntriesService);
    findAll(): Promise<Entry[]>;
    create(createEntryDto: CreateEntryDto): Promise<{
        message: string;
    }>;
    findOne(id: string): Promise<Entry>;
}
