import { Exclude, Expose, Type } from 'class-transformer';
import { ContactInfoDto } from './contact-info.dto';

@Exclude()
export class EmployeeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  managerId?: number;

  @Type(() => ContactInfoDto)
  @Expose()
  contactInfo?: ContactInfoDto;
}
