import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { DataSource } from 'typeorm';
import { GetEmployeesReportQuery } from './get-employees-report.query';
import { EmployeesReportDto } from './employees-report.dto';
import { plainToClass } from 'class-transformer';

@QueryHandler(GetEmployeesReportQuery)
export class GetEmployeesReportHandler
  implements IQueryHandler<GetEmployeesReportQuery, EmployeesReportDto[]>
{
  constructor(private readonly dataSource: DataSource) {}

  async execute() {
    const data = await this.dataSource.manager.query(`
      SELECT
        e.id,
        e.name,
        e.managerId,
        manager.name AS managerName,
        ci.phone AS phone,
        ci.email AS email,
        COUNT(DISTINCT t.id) AS numberOfTasks,
        COUNT(DISTINCT ma.meetingId) AS numberOfMeetings
      FROM employee e
      LEFT JOIN employee manager ON e.managerId = manager.id
      LEFT JOIN contact_info ci ON e.id = ci.id
      LEFT JOIN task t ON e.id = t.assigneeId
      LEFT JOIN meeting_attendees_employee ma ON e.id = ma.employeeId
      LEFT JOIN meeting m ON ma.meetingId = m.id
      GROUP BY e.id, e.name, e.managerId, manager.name, ci.phone, ci.email;
    `);

    return data.map((row) => plainToClass(EmployeesReportDto, row));
  }
}
