export class UpdateEmployeeCommand {
  id: number;
  name: string;
  managerId?: number;
  contactInfo?: {
    phone?: string;
    email?: string;
  };
}
