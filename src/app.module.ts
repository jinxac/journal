import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Entry } from './entries/entry.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'diary',
      entities: [Entry],
      synchronize: true,
    }),
    EntriesModule,
  ],
})
export class AppModule {}
