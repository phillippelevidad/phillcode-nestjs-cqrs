import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Employee } from 'src/employees/entities/employee.entity';
import { AssignManagerCommand } from './assign-manager.command';

@CommandHandler(AssignManagerCommand)
export class AssignManagerHandler
  implements ICommandHandler<AssignManagerCommand, number>
{
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async execute(command: AssignManagerCommand): Promise<number> {
    return await this.dataSource.transaction(async (db) => {
      const employee = await db.findOne(Employee, {
        where: { id: command.id },
      });
      if (!employee) return 0;

      employee.managerId = command.managerId ?? null;
      await db.save(Employee, employee);
      return 1;
    });
  }
}
