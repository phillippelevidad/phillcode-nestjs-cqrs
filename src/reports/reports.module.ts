import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries';

@Module({
  imports: [CqrsModule],
  controllers: [ReportsController],
  providers: [...QueryHandlers],
})
export class ReportsModule {}
