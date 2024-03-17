import { IsInt, IsOptional } from 'class-validator';

export class AssignManagerDto {
  @IsInt()
  @IsOptional()
  managerId?: number;
}
