import { hash } from "bcryptjs";
import { User } from "../entities/user.entity";

export class UserBuilder {
  private name: string = "";
  private email: string = "";
  private phone: string = "";
  private password: string = "";

  setName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  setPhone(phone: string): UserBuilder {
    this.phone = phone;
    return this;
  }

  setPassword(password: string): UserBuilder {
    this.password = password;
    return this;
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return hash(password, saltRounds);
  }

  async build(): Promise<User> {
    const hashedPassword = await this.hashPassword(this.password);
    return User.create({
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: hashedPassword,
    });
  }
}
