import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { ContactInfo } from './entities/contact-info.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries';
import { CommandHandlers } from './commands';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Employee, ContactInfo])],
  controllers: [EmployeesController],
  providers: [...QueryHandlers, ...CommandHandlers],
})
export class EmployeesModule {}
