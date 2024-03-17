import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetEmployeesReportQuery } from './queries/get-employees-report/get-employees-report.query';

@Controller('reports')
export class ReportsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('employees')
  getEmployeesReport() {
    const query = new GetEmployeesReportQuery();
    return this.queryBus.execute(query);
  }
}
