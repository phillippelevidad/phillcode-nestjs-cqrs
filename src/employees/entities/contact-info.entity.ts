import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  email?: string;
}
