import {
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import { User } from "./user.entity";

export enum TaskStatus {
  OPEN = "open",
  COMPLETED = "completed",
}

@Table({
  timestamps: true,
})
export class Task extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  createdBy: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  assignedTo: number;

  @Column({
    type: DataType.ENUM(...Object.values(TaskStatus)),
    allowNull: false,
    defaultValue: TaskStatus,
  })
  status: TaskStatus;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dueDate: Date;
}
