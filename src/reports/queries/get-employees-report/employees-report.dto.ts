export class EmployeesReportDto {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  managerId?: number;
  managerName?: string;
  numberOfTasks: number;
  numberOfMeetings: number;
}
