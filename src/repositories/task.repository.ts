import { Task } from "../entities/task.entity";
import { AbstractRepository } from "./abstract/abstract.repository";

export class TaskRepository extends AbstractRepository<Task> {
  constructor() {
    super(Task);
  }
}
