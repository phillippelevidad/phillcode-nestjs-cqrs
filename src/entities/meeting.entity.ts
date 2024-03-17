import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from '../employees/entities/employee.entity';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee)
  @JoinTable()
  attendees: Employee[];
}
