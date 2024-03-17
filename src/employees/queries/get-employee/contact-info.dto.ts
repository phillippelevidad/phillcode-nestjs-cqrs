import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ContactInfoDto {
  @Expose()
  phone?: string;

  @Expose()
  email?: string;
}
