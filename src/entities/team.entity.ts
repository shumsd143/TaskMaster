import {
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "./user.entity";

export enum TaskStatus {
  OPEN = "open",
  COMPLETED = "completed",
}

@Table({
  timestamps: true,
})
export class Team extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

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

  @BelongsToMany(() => User, 'UserTeams', 'teamId', 'userId')
  members!: User[];
}
