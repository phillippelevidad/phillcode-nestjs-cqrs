import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Employee } from 'src/employees/entities/employee.entity';
import { UpdateEmployeeCommand } from './update-employee.command';

@CommandHandler(UpdateEmployeeCommand)
export class UpdateEmployeeHandler
  implements ICommandHandler<UpdateEmployeeCommand, number>
{
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async execute(command: UpdateEmployeeCommand): Promise<number> {
    return await this.dataSource.transaction(async (db) => {
      const employee = await db.findOne(Employee, {
        where: { id: command.id },
        relations: ['contactInfo'],
      });
      if (!employee) return 0;

      db.merge(Employee, employee, command);
      await db.save(Employee, employee);
      return 1;
    });
  }
}
