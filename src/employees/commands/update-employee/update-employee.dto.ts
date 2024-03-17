import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from '../create-employee/create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
