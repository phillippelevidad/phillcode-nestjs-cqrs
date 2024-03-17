import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactInfo } from './contact-info.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, { onDelete: 'SET NULL' })
  @JoinColumn()
  manager?: Employee;

  @Column({ nullable: true })
  managerId?: number;

  @OneToOne(() => ContactInfo, { cascade: true })
  @JoinColumn()
  contactInfo?: ContactInfo;
}
