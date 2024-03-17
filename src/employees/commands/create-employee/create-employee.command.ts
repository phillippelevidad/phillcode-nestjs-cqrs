export class CreateEmployeeCommand {
  name: string;
  managerId?: number;
  contactInfo?: {
    phone?: string;
    email?: string;
  };
}
