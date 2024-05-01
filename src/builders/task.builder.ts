import { Task, TaskStatus } from "../entities/task.entity";

export class TaskBuilder {
  private title: string;
  private description: string;
  private status: TaskStatus;
  private dueDate: Date;
  private createdBy: number;

  constructor() {
    this.title = "";
    this.description = "";
    this.status = TaskStatus.OPEN;
    this.dueDate = new Date();
  }

  setTitle(title: string): TaskBuilder {
    this.title = title;
    return this;
  }

  setDescription(description: string): TaskBuilder {
    this.description = description;
    return this;
  }

  setStatus(status: TaskStatus): TaskBuilder {
    this.status = status;
    return this;
  }

  setDueDate(dueDate: Date): TaskBuilder {
    this.dueDate = dueDate;
    return this;
  }

  setCreatedBy(id: number): TaskBuilder {
    this.createdBy = id;
    return this;
  }

  build(): Promise<Task> {
    return Task.create({
      title: this.title,
      description: this.description,
      createdBy: this.createdBy,
      status: this.status,
      dueDate: this.dueDate,
    });
  }
}
